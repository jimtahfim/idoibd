import staticCourses from '../../data/courses.json';

/**
 * @typedef {Object} PublicCourse
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} category
 * @property {string} shortDescription
 * @property {string} description
 * @property {number} fee
 * @property {string} currency
 * @property {string} duration
 * @property {string} learningMode
 * @property {boolean} isActive
 * @property {number} [sortOrder]
 * @property {string} [imageUrl]
 * @property {string} [admissionUrl]
 */

const DEFAULT_API_BASE_URL = 'https://admission.idoibd.com/api/v1/public';

/**
 * Gets the configured public course API base URL.
 * Removes trailing slashes if present.
 */
export const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_PUBLIC_COURSE_API_URL;
  const baseUrl = envUrl && envUrl.trim() !== '' ? envUrl.trim() : DEFAULT_API_BASE_URL;
  return baseUrl.replace(/\/+$/, '');
};

/**
 * Normalizes API raw course object into a consistent PublicCourse structure.
 * 
 * @param {any} raw 
 * @returns {PublicCourse}
 */
export const normalizeCourse = (raw) => {
  if (!raw || typeof raw !== 'object') {
    return null;
  }

  return {
    id: raw.$id || raw.id || raw.slug || '',
    name: raw.name || raw.title || 'শিরোনামহীন কোর্স',
    slug: raw.slug || '',
    category: raw.category || 'সাধারণ ও কর্মজীবি',
    shortDescription: raw.shortDescription || raw.short_description || raw.description || '',
    description: raw.description || raw.longDescription || raw.shortDescription || '',
    fee: typeof raw.fee === 'number' ? raw.fee : (parseFloat(raw.fee) || 0),
    currency: raw.currency || 'BDT',
    duration: raw.duration || 'নির্দিষ্ট মেয়াদ',
    learningMode: raw.learningMode || raw.learning_mode || 'Live Online',
    isActive: raw.isActive !== undefined ? Boolean(raw.isActive) : true,
    sortOrder: raw.sortOrder || raw.sort_order || 999,
    imageUrl: raw.imageUrl || raw.image_url || raw.image || raw.thumbnail || '',
    admissionUrl: raw.admissionUrl || raw.admission_url || `https://admission.idoibd.com/?course=${raw.slug || ''}`
  };
};

/**
 * Gets fallback courses from local static dataset.
 * 
 * @returns {PublicCourse[]}
 */
export const getFallbackActiveCourses = () => {
  if (!Array.isArray(staticCourses)) return [];
  const normalized = staticCourses
    .map(normalizeCourse)
    .filter(course => course !== null && course.isActive);

  normalized.sort((a, b) => (a.sortOrder || 999) - (b.sortOrder || 999));
  return normalized;
};

/**
 * Gets fallback course by slug from local static dataset.
 * 
 * @param {string} slug 
 * @returns {PublicCourse|null}
 */
export const getFallbackCourseBySlug = (slug) => {
  if (!Array.isArray(staticCourses) || !slug) return null;
  const raw = staticCourses.find(c => c.slug === slug || c.$id === slug || c.id === slug);
  return raw ? normalizeCourse(raw) : null;
};

/**
 * Fetches all active courses from the public admission API.
 * GET /courses
 * Falls back to local static course dataset if API call fails.
 * 
 * @returns {Promise<PublicCourse[]>}
 */
export const getActiveCourses = async () => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/courses`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`কোর্স তথ্য লোড করতে ব্যর্থ হয়েছে (HTTP ${response.status})`);
    }

    const payload = await response.json();

    // Extract list whether response is direct array, { data: [...] }, or { courses: [...] }
    let rawList = [];
    if (Array.isArray(payload)) {
      rawList = payload;
    } else if (payload && Array.isArray(payload.data)) {
      rawList = payload.data;
    } else if (payload && Array.isArray(payload.courses)) {
      rawList = payload.courses;
    } else if (payload && payload.documents && Array.isArray(payload.documents)) {
      rawList = payload.documents;
    }

    const normalized = rawList
      .map(normalizeCourse)
      .filter(course => course !== null && course.isActive);

    // Sort by sortOrder if present
    normalized.sort((a, b) => (a.sortOrder || 999) - (b.sortOrder || 999));

    if (normalized.length > 0) {
      return normalized;
    }

    return getFallbackActiveCourses();
  } catch (err) {
    console.warn('API fetch failed, using local static course dataset:', err.message || err);
    return getFallbackActiveCourses();
  }
};

/**
 * Fetches course details by slug from the public admission API.
 * GET /courses/:slug
 * Falls back to local static course dataset if API call fails.
 * 
 * @param {string} slug 
 * @returns {Promise<PublicCourse>}
 */
export const getCourseBySlug = async (slug) => {
  if (!slug) {
    throw new Error('কোর্সের সঠিক স্লাগ প্রয়োজন');
  }

  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/courses/${encodeURIComponent(slug)}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.status === 404) {
      const fallback = getFallbackCourseBySlug(slug);
      if (fallback) return fallback;
      const err = new Error('কোর্সটি খুঁজে পাওয়া যায়নি');
      err.status = 404;
      throw err;
    }

    if (!response.ok) {
      throw new Error(`কোর্সের বিস্তারিত তথ্য লোড করতে সমস্যা হয়েছে (HTTP ${response.status})`);
    }

    const payload = await response.json();
    const rawCourse = payload.data || payload.course || payload;
    
    const normalized = normalizeCourse(rawCourse);
    if (!normalized) {
      const fallback = getFallbackCourseBySlug(slug);
      if (fallback) return fallback;
      const err = new Error('কোর্সটি খুঁজে পাওয়া যায়নি');
      err.status = 404;
      throw err;
    }

    return normalized;
  } catch (err) {
    if (err.status === 404) {
      throw err;
    }
    console.warn(`API fetch for slug "${slug}" failed, checking local static fallback:`, err.message || err);
    const fallback = getFallbackCourseBySlug(slug);
    if (fallback) {
      return fallback;
    }
    throw err;
  }
};
