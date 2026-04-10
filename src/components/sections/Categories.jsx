import React from 'react';
import { BookMarked, Clock, Users, ArrowRight } from 'lucide-react';
import './Categories.css';
import categoriesData from '../../data/categories.json';

const iconMap = {
  BookMarked: <BookMarked size={32} />,
  Clock: <Clock size={32} />,
  Users: <Users size={32} />
};

const Categories = () => {
  return (
    <section className="section section-bg-white" id="categories">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="h2 text-dark">কোর্সের ক্যাটাগরি</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            আপনার শিক্ষার লক্ষ্য অনুযায়ী সঠিক ক্যাটাগরি নির্বাচন করুন এবং শেখা শুরু করুন।
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {categoriesData.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="cat-icon-header flex items-center justify-between mb-4">
                <div className="cat-icon">
                  {iconMap[cat.icon]}
                </div>
                <div className="cat-links">
                  <ArrowRight size={20} className="cat-arrow" />
                </div>
              </div>
              <h3 className="h3 mb-2">{cat.name}</h3>
              <p className="p-small mb-4" style={{ minHeight: '40px' }}>{cat.description}</p>
              
              <ul className="cat-course-list">
                {cat.courses.map((courseItem, idx) => (
                  <li key={idx} className="cat-course-chip">
                    {courseItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
