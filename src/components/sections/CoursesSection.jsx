import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Sparkles, BookOpen, GraduationCap, Briefcase, Layers, RefreshCw, AlertCircle } from 'lucide-react';
import CourseCard from './CourseCard';
import { useCourses } from '../../hooks/useCourses';
import { toBanglaNumber } from '../../lib/utils/numberUtils';
import './CoursesSection.css';

const categoriesList = [
  { id: 'all', label: 'সকল কোর্স', icon: <Layers size={18} /> },
  { id: 'free', label: 'ফ্রি কোর্স', icon: <Sparkles size={18} /> },
  { id: 'মাদরাসা শিক্ষার্থী', label: 'মাদরাসা শিক্ষার্থী', icon: <BookOpen size={18} /> },
  { id: 'জেনারেল ছাত্র', label: 'জেনারেল ছাত্র', icon: <GraduationCap size={18} /> },
  { id: 'সাধারণ ও কর্মজীবি', label: 'সাধারণ ও কর্মজীবি', icon: <Briefcase size={18} /> }
];

const categoryHashAlias = {
  'madrasa': 'মাদরাসা শিক্ষার্থী',
  'general': 'জেনারেল ছাত্র',
  'pro': 'সাধারণ ও কর্মজীবি',
  'free': 'free',
  'running': 'all',
  'upcoming': 'all',
  'short': 'all'
};

const CoursesSection = () => {
  const location = useLocation();
  const { courses, loading, error, refetch } = useCourses();
  const [userSelectedCategory, setUserSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const hash = location?.hash ? decodeURIComponent(location.hash.replace('#', '')) : '';
  const hashCategory = categoryHashAlias[hash] || (categoriesList.some(c => c.id === hash) ? hash : null);
  const selectedCategory = userSelectedCategory || hashCategory || 'all';

  const filteredCourses = courses.filter(course => {
    let matchesCategory = false;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'free') {
      matchesCategory = course.fee === 0;
    } else {
      matchesCategory = course.category === selectedCategory;
    }

    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.shortDescription && course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getCountForCategory = (catId) => {
    if (catId === 'all') return courses.length;
    if (catId === 'free') return courses.filter(c => c.fee === 0).length;
    return courses.filter(c => c.category === catId).length;
  };

  return (
    <section className="section courses-section-wrapper" id="courses">
      <div className="container">
        {/* Section Header */}
        <div className="courses-header text-center">
          <div className="courses-badge-pill">
            <Sparkles size={16} /> দ্বীনি শিক্ষার পূর্ণাঙ্গ আঙিনা
          </div>
          <h2 className="h2 text-dark courses-heading">আমাদের কোর্সসমূহ</h2>
          <p className="p-large courses-subheading">
            আপনার আগ্রহ ও প্রয়োজন অনুযায়ী সেরা কোর্স নির্বাচন করে আজই দ্বীনি এলেম অর্জন শুরু করুন।
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="courses-controls-card">
          {/* Category Tabs */}
          <div className="category-tabs-row">
            {categoriesList.map((cat) => {
              const count = getCountForCategory(cat.id);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setUserSelectedCategory(cat.id)}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">{toBanglaNumber(count)}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="courses-search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="কোর্সের নাম বা বিষয় দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                মুছে ফেলুন
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Info / Stats */}
        {!loading && !error && (
          <div className="courses-stats-strip">
            <span className="stats-text">
              <Filter size={15} /> 
              {selectedCategory === 'all' 
                ? 'সকল ক্যাটাগরিতে' 
                : `"${selectedCategory}" ক্যাটাগরিতে`} 
              মোট <strong>{toBanglaNumber(filteredCourses.length)}</strong> টি কোর্স প্রদর্শিত হচ্ছে
            </span>
          </div>
        )}

        {/* Loading Skeleton Grid */}
        {loading && (
          <div className="grid grid-cols-3 gap-6 courses-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="skeleton-card">
                <div className="skeleton-banner"></div>
                <div className="skeleton-line medium"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="courses-error-state">
            <AlertCircle size={48} color="#dc2626" style={{ margin: '0 auto 16px auto' }} />
            <h3>কোর্স তথ্য লোড করা সম্ভব হয়নি</h3>
            <p>{error}</p>
            <button className="btn-retry" onClick={refetch}>
              <RefreshCw size={16} /> পুনরায় চেষ্টা করুন
            </button>
          </div>
        )}

        {/* Courses Grid */}
        {!loading && !error && filteredCourses.length > 0 && (
          <div className="grid grid-cols-3 gap-6 courses-grid">
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id || course.slug} 
                course={course} 
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredCourses.length === 0 && (
          <div className="courses-empty-state">
            <div className="empty-icon"><Search size={48} /></div>
            <h3>কোনো কোর্স খুঁজে পাওয়া যায়নি!</h3>
            <p>আপনার অনুসন্ধানের সাথে মেলে এমন কোনো সক্রিয় কোর্স এই মুহূর্তে নেই।</p>
            <button 
              className="btn btn-primary" 
              onClick={() => { setUserSelectedCategory('all'); setSearchQuery(''); }}
              style={{ marginTop: '16px' }}
            >
              সকল কোর্স দেখুন
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
