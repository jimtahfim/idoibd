# Course API Integration Technical Documentation

## Overview
This document describes the integration between the IDOI Public Website (`idoibd.com`) and the Admission Course Public API (`admission.idoibd.com`).

The IDOI Public Website is a **frontend-only** React (Vite) application. It dynamically fetches course data from the public read-only API exposed by the admission system.

---

## Architecture & Data Flow

```
idoibd.com (Vite / React)
     │
     │ GET /api/v1/public/courses
     │ GET /api/v1/public/courses/:slug
     ▼
admission.idoibd.com (Public API)
     │
     ▼
Appwrite Database (Single Source of Truth)
```

- **Frontend-Only**: `idoibd.com` maintains no database, backend server, or Appwrite SDK instance.
- **Single Source of Truth**: `admission.idoibd.com` manages all course definitions, fees, statuses, descriptions, and durations.

---

## Environment Configuration

Configure the API base URL in `.env`:

```env
VITE_PUBLIC_COURSE_API_URL=https://admission.idoibd.com/api/v1/public
```

*Note*: No API keys or secret credentials belong in `idoibd.com`. The API endpoints are public and read-only.

---

## API Endpoints

### 1. Active Course Listing
- **Endpoint**: `GET /courses`
- **Full URL**: `https://admission.idoibd.com/api/v1/public/courses`
- **Response Format**:
  ```json
  [
    {
      "$id": "course_madrasa_dawah_1yr",
      "name": "দাওয়াহ কোর্স",
      "slug": "dawah-course-madrasa-1yr",
      "category": "মাদরাসা শিক্ষার্থী",
      "shortDescription": "১ বছর মেয়াদী দাওয়াহ প্রশিক্ষণ কোর্স।",
      "description": "মাদরাসা শিক্ষার্থীদের দাওয়াহ ও তাবলীগী মেহনতের জন্য প্রস্তুত করার বিশেষ কোর্স।",
      "fee": 1500,
      "currency": "BDT",
      "duration": "১ বছর",
      "learningMode": "Live Online",
      "isActive": true,
      "sortOrder": 1
    }
  ]
  ```

### 2. Course Details by Slug
- **Endpoint**: `GET /courses/:slug`
- **Full URL**: `https://admission.idoibd.com/api/v1/public/courses/dawah-course-madrasa-1yr`
- **Response Format**: Single course object or `{ "data": { ... } }`.

---

## Key Frontend Features & Utilities

### 1. Centralized API Module (`src/lib/api/courses.js`)
- `getActiveCourses()`: Fetches list of active courses.
- `getCourseBySlug(slug)`: Fetches details for a specific course by slug.
- `normalizeCourse()`: Guarantees consistent data fields (`id`, `name`, `slug`, `category`, `fee`, `duration`, `learningMode`, `admissionUrl`).

### 2. Custom Hooks (`src/hooks/useCourses.js`)
- `useCourses()`: Provides `courses`, `loading`, `error`, and `refetch()`.
- `useCourseDetail(slug)`: Provides `course`, `loading`, `error`, `notFound`, and `refetch()`.
- Includes a 5-minute memory cache to minimize redundant network calls.

### 3. Bangla Number Utility (`src/lib/utils/numberUtils.js`)
- `toBanglaNumber(num)`: Converts English numbers (`0-9`) into Bengali digits (`০-৯`).
- Applied to category tab badges (`৩৩`, `১২`, `১১`, `১০`), total course metrics, and pricing values (`৳ ১,৫০০` / `বিনামূল্যে`).

---

## Error Handling & Fallback

- **Network / API Failure**: Shows a clean, user-friendly alert message with a **"পুনরায় চেষ্টা করুন" (Retry)** button.
- **404 / Invalid Slug**: Displays a clean 404 notice with a button directing users back to `/courses`.
- **No Stale Fallback**: `idoibd.com` does NOT serve stale static course JSON if the API fails, ensuring accurate pricing and course information at all times.

---

## Admission CTA Workflow

All "ভর্তি হন" (Apply Now) CTA buttons redirect users to the official admission portal:
- Main Portal: `https://admission.idoibd.com/`
- Course Context Link: `https://admission.idoibd.com/?course=:slug`
