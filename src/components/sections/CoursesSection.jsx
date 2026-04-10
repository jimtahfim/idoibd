import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from './CourseCard';
import coursesData from '../../data/courses.json';

const CoursesSection = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('running');

  useEffect(() => {
    if (location && location.hash) {
      const hash = location.hash.replace('#', '');
      if (['running', 'upcoming', 'short'].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, [location.hash]);

  const coursesToDisplay = coursesData[activeTab] || [];

  return (
    <section className="section bg-neutral-soft" id="courses">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 className="h2 text-dark">আমাদের কোর্সসমূহ</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            আপনার প্রয়োজন অনুযায়ী কোর্স নির্বাচন করুন এবং যুক্ত হোন আমাদের বিশাল কমিউনিটিতে।
          </p>
        </div>

        <div className="flex justify-center gap-4" style={{ marginBottom: '50px' }}>
          <button 
            className={`btn ${activeTab === 'running' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('running')}
          >
            চলমান কোর্স
          </button>
          <button 
            className={`btn ${activeTab === 'upcoming' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            আসন্ন কোর্স
          </button>
          <button 
            className={`btn ${activeTab === 'short' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('short')}
          >
            সংক্ষিপ্ত কোর্স
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {coursesToDisplay.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              isUpcoming={activeTab === 'upcoming'} 
            />
          ))}
        </div>
        
        {coursesToDisplay.length === 0 && (
          <div className="text-center py-8 text-muted">
            বর্তমানে কোনো কোর্স পাওয়া যায়নি।
          </div>
        )}

      </div>
    </section>
  );
};

export default CoursesSection;
