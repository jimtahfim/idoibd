import { useState, useEffect, useCallback } from 'react';
import { getActiveCourses, getCourseBySlug } from '../lib/api/courses';

// Lightweight memory cache to avoid unnecessary duplicate network requests
const memoryCache = {
  coursesList: null,
  coursesBySlug: new Map(),
  lastFetched: null,
  CACHE_TTL_MS: 5 * 60 * 1000 // 5 minutes cache TTL
};

/**
 * React hook to fetch and manage active courses list.
 * Includes loading, error, refetch, and lightweight caching.
 */
export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setError(null);

    const now = Date.now();
    const isCacheValid = 
      !forceRefresh && 
      memoryCache.coursesList && 
      memoryCache.lastFetched && 
      (now - memoryCache.lastFetched < memoryCache.CACHE_TTL_MS);

    if (isCacheValid) {
      setCourses(memoryCache.coursesList);
      setLoading(false);
      return;
    }

    try {
      const data = await getActiveCourses();
      memoryCache.coursesList = data;
      memoryCache.lastFetched = now;
      // Update slug cache as well
      data.forEach(course => {
        if (course.slug) {
          memoryCache.coursesBySlug.set(course.slug, course);
        }
      });
      setCourses(data);
    } catch (err) {
      setError(err.message || 'কোর্স তালিকা লোড করতে সমস্যা হয়েছে। দয়া করে ইন্টারনেট সংযোগ পরীক্ষা করে পুনরায় চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    loading,
    error,
    refetch: () => fetchCourses(true)
  };
};

/**
 * React hook to fetch details for a single course by slug.
 * 
 * @param {string} slug 
 */
export const useCourseDetail = (slug) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const fetchDetail = useCallback(async (forceRefresh = false) => {
    if (!slug) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    setLoading(true);
    setError(null);
    setNotFound(false);

    // Check memory cache first
    if (!forceRefresh && memoryCache.coursesBySlug.has(slug)) {
      setCourse(memoryCache.coursesBySlug.get(slug));
      setLoading(false);
      return;
    }

    try {
      const data = await getCourseBySlug(slug);
      memoryCache.coursesBySlug.set(slug, data);
      setCourse(data);
    } catch (err) {
      if (err.status === 404) {
        setNotFound(true);
      } else {
        setError(err.message || 'কোর্সের তথ্য লোড করা সম্ভব হয়নি।');
      }
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return {
    course,
    loading,
    error,
    notFound,
    refetch: () => fetchDetail(true)
  };
};
