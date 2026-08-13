import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Sparkles, BookOpen, GraduationCap, Briefcase, Layers } from 'lucide-react';
import CourseCard from './CourseCard';
import coursesData from '../../data/courses.json';
import './CoursesSection.css';

const categoriesList = [
  { id: 'all', label: 'সকল কোর্স', icon: <Layers size={18} /> },
  { id: 'মাদ্রাসা শিক্ষার্থী', label: 'মাদ্রাসা শিক্ষার্থী', icon: <BookOpen size={18} /> },
  { id: 'জেনারেল ছাত্র', label: 'জেনারেল ছাত্র', icon: <GraduationCap size={18} /> },
  { id: 'সাধারণ ও কর্মজীবি', label: 'সাধারণ ও কর্মজীবি', icon: <Briefcase size={18} /> }
];

const categoryHashAlias = {
  'madrasa': 'মাদ্রাসা শিক্ষার্থী',
  'general': 'জেনারেল ছাত্র',
  'pro': 'সাধারণ ও কর্মজীবি',
  'running': 'all',
  'upcoming': 'all',
  'short': 'all'
};

const CoursesSection = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location && location.hash) {
      const hash = decodeURIComponent(location.hash.replace('#', ''));
      if (categoryHashAlias[hash]) {
        setSelectedCategory(categoryHashAlias[hash]);
      } else if (categoriesList.some(c => c.id === hash)) {
        setSelectedCategory(hash);
      }
    }
  }, [location.hash]);

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getCountForCategory = (catId) => {
    if (catId === 'all') return coursesData.length;
    return coursesData.filter(c => c.category === catId).length;
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
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">{count}</span>
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
        <div className="courses-stats-strip">
          <span className="stats-text">
            <Filter size={15} /> 
            {selectedCategory === 'all' 
              ? 'সকল ক্যাটাগরিতে' 
              : `"${selectedCategory}" ক্যাটাগরিতে`} 
            মোট <strong>{filteredCourses.length}</strong> টি কোর্স প্রদর্শিত হচ্ছে
          </span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-3 gap-6 courses-grid">
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.$id || course.slug} 
                course={course} 
              />
            ))}
          </div>
        ) : (
          <div className="courses-empty-state">
            <div className="empty-icon"><Search size={48} /></div>
            <h3>কোনো কোর্স খুঁজে পাওয়া যায়নি!</h3>
            <p>আপনার অনুসন্ধানের সাথে মেলে এমন কোনো কোর্স এই মুহূর্তে নেই।</p>
            <button 
              className="btn btn-primary" 
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
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
