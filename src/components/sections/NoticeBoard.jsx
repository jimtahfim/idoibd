import React from 'react';
import { Bell, CalendarRange, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NoticeBoard.css';
import noticesData from '../../data/notices.json';

const NoticeBoard = () => {
  return (
    <section className="bg-neutral-soft" id="notice" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="h2 text-dark">নোটিশ বোর্ড</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '30px' }}>
            ইনস্টিটিউটের সর্বশেষ সকল আপডেট ও বিজ্ঞপ্তি।
          </p>
        </div>

        <div className="notice-grid">
          {noticesData.slice(0, 2).map((notice) => (
            <div key={notice.id} className="notice-card">
              <div className="notice-icon">
                <Bell size={24} />
              </div>
              <div className="notice-content">
                <div className="flex justify-between items-center mb-2">
                  <span className="notice-type">{notice.type}</span>
                  <span className="notice-date"><CalendarRange size={14} /> {notice.date}</span>
                </div>
                <h3 className="notice-title">{notice.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '50px' }}>
          <Link to="/notice" className="btn btn-outline">
            সব নোটিশ দেখুন <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
