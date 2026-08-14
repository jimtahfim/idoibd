# System Architecture

## Overview

The IDOI ecosystem consists of two distinct web applications:

1. **`idoibd.com`** — Public Marketing & Educational Information Website (Frontend-Only)
2. **`admission.idoibd.com`** — Student Admission & Portal System (Backend & Appwrite Database)

---

## Data Flow Diagram

```
+-------------------------------------------------------------+
|                      IDOI Public Website                    |
|                        (idoibd.com)                         |
|                     [Frontend-Only / React]                 |
+-------------------------------------------------------------+
                               |
                               | GET /api/v1/public/courses
                               | GET /api/v1/public/courses/:slug
                               v
+-------------------------------------------------------------+
|                     Admission Public API                    |
|                   (admission.idoibd.com)                    |
|                    [Read-Only API Server]                   |
+-------------------------------------------------------------+
                               |
                               | Database Queries
                               v
+-------------------------------------------------------------+
|                      Appwrite Backend                       |
|                 (Single Source of Truth)                    |
|                [Courses, Fees, Admissions]                  |
+-------------------------------------------------------------+
```

---

## Architectural Principles

1. **`idoibd.com` has NO backend server or local database for course data.**
2. **No Credentials in Frontend**: No Appwrite API keys, database credentials, or administrative tokens exist in `idoibd.com`.
3. **Single Source of Truth**: `admission.idoibd.com` is the authoritative source for course offerings, pricing, durations, and active statuses.
4. **Resilience & User Experience**: The public website handles API loading, network failures, empty results, and 404 states gracefully.
