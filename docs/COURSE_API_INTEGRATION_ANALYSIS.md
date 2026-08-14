# IDOI Public Website — Course API Integration Analysis

## 1. Overview & Objectives

The IDOI Public Website (`https://www.idoibd.com/`) is currently a frontend-only React application rendering course information from a static JSON file (`src/data/courses.json`).

The primary objective is to connect `idoibd.com` directly to the public read-only Course API hosted by the separate admission system at `https://admission.idoibd.com/`.

### Core Architectural Rules
- `idoibd.com` remains **strictly FRONTEND-ONLY**.
- No backend server, database, Appwrite SDK, or administrative credentials will be added.
- The admission system (`admission.idoibd.com`) is the **SINGLE SOURCE OF TRUTH** for course data.
- Hardcoded course JSON data will be removed from the production workflow so prices, statuses, and descriptions are never out-of-sync.
- All numbers (course counts on tab badges, total count in status strip, course fees) must be formatted using **Bangla Digits** (`০, ১, ২, ৩, ৪, ৫, ৬, ৭, ৮, ৯`).

---

## 2. Existing Architecture Analysis

### Framework & Dependencies
- **Framework**: React 19 + Vite 8
- **Routing**: `react-router-dom` v7 (`BrowserRouter`, `Routes`, `Route`)
- **Styling**: Vanilla CSS with modular stylesheets (`CourseCard.css`, `CoursesSection.css`, `index.css`)
- **Icons**: `lucide-react`

### Existing Files & Components Handling Course Data
1. **`src/data/courses.json`**:
   - Contains 33 static course records with fields: `$id`, `name`, `slug`, `category`, `shortDescription`, `description`, `fee`, `currency`, `duration`, `learningMode`, `isActive`, `sortOrder`.
2. **`src/components/sections/CoursesSection.jsx`**:
   - Imports `coursesData` directly from `src/data/courses.json`.
   - Handles client-side category filtering (`মাদ্রাসা শিক্ষার্থী`, `জেনারেল ছাত্র`, `সাধারণ ও কর্মজীবি`) and keyword search.
   - Renders category tab count badges and summary stats strip.
3. **`src/components/sections/CourseCard.jsx`**:
   - Renders individual course cards and a detail modal popup (`showModal`).
   - Hardcodes admission CTA URL to `https://admission.idoibd.com/`.
4. **`src/components/layout/Navbar.jsx`**:
   - Hardcodes static menu items, including `সকল কোর্স (৩৩)`.
5. **`src/pages/CoursesPage.jsx`**:
   - Wraps `CoursesSection` and `Categories`.
6. **`src/App.jsx`**:
   - Defines routes `/courses`, `/admission`, `/faq`, etc. Currently missing explicit route for `/courses/:slug`.

---

## 3. Data Duplication Audit

| File | Duplicated Data / Usage | Remediation Strategy |
|---|---|---|
| `src/data/courses.json` | 33 hardcoded courses | Remove / depreciate as source of truth; replace with API client fetch |
| `src/components/layout/Navbar.jsx` | Hardcoded course count `(৩৩)` | Make count dynamic or format with Bangla numbers |
| `src/components/sections/Categories.json` | List of sample course names in category cards | Maintain as visual category guidance or align dynamically |

---

## 4. Proposed Architecture & Changes

```
idoibd.com (Vite / React)
     │
     │  GET /api/v1/public/courses
     │  GET /api/v1/public/courses/:slug
     ▼
admission.idoibd.com (Public API)
     │
     ▼
Appwrite Database (Single Source of Truth)
```

### Proposed New & Modified Files

1. **`src/lib/api/courses.js`**:
   - Centralized course API module containing `getActiveCourses()` and `getCourseBySlug(slug)`.
   - Reads base URL from `import.meta.env.VITE_PUBLIC_COURSE_API_URL` (defaulting to `https://admission.idoibd.com/api/v1/public`).

2. **`src/lib/utils/numberUtils.js`**:
   - Utility function `toBanglaNumber(num)` to convert numbers to Bengali digits (`33` -> `৩৩`).

3. **`src/hooks/useCourses.js`**:
   - Custom React hook managing state (`courses`, `loading`, `error`, `refetch`).
   - Includes simple memory caching to avoid redundant API requests.

4. **`src/pages/CourseDetailPage.jsx`** & **Route `/courses/:slug`**:
   - Dedicated SEO-friendly detail page reading `:slug` from params.
   - Fetches course data dynamically from `getCourseBySlug(slug)`.
   - Sets document title & OpenGraph meta headers.

5. **`src/components/sections/CoursesSection.jsx`**:
   - Replaces static JSON import with API-driven data fetching via `useCourses`.
   - Formats tab badges (`tab-count`) and status strip total count using `toBanglaNumber()`.
   - Shows skeleton loaders during fetch and clean error/retry component on failure.

6. **`src/components/sections/CourseCard.jsx`**:
   - Accepts normalized course objects from API.
   - Updates "ভর্তি হন" CTA to link to `https://admission.idoibd.com/` (or course-specific URL if available).
   - Formats fee with `toBanglaNumber()`.

7. **Documentation**:
   - `docs/COURSE_API_INTEGRATION.md`
   - `docs/ARCHITECTURE.md`
   - `docs/COURSE_API_INTEGRATION_IMPLEMENTATION.md`

---

## 5. Security & Fallback Principles

- **No Secrets**: No Appwrite keys, JWTs, or admin tokens will exist in `idoibd.com`.
- **API Failure Strategy**: If API is unreachable, present a clear, elegant alert with a "পুনরায় চেষ্টা করুন" (Retry) action.
- **Single Source of Truth**: No local fallback database will be kept to avoid stale pricing or out-of-date course information.
