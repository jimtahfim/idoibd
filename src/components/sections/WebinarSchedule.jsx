import React from 'react';
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';
import './WebinarSchedule.css';
import webinarsData from '../../data/webinars.json';

const WebinarSchedule = () => {
  return (
    <section className="section section-bg-white" id="webinar">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 items-start webinar-layout">
          
          <div className="webinar-info">
            <div className="badge-pill mb-4" style={{ display: 'inline-flex', background: 'rgba(24, 183, 119, 0.1)', color: 'var(--accent)' }}>
              নিবন্ধন চলছে
            </div>
            <h2 className="h2 text-dark mb-4">আসন্ন ফ্রি ওয়েবিনার ও সেমিনার</h2>
            <p className="p-large mb-6">
              আমাদের নিয়মিত লাইভ ওয়েবিনারগুলোতে অংশগ্রহণ করে সমসাময়িক বিভিন্ন বিষয়ে ইসলামি স্কলারদের কাছ থেকে সরাসরি দিকনির্দেশনা গ্রহণ করুন।
            </p>
            <button className="btn btn-primary mb-6">
              সবগুলো দেখুন <ArrowRight size={18} />
            </button>
          </div>

          <div className="webinar-list">
            {webinarsData.map((webinar) => (
              <div key={webinar.id} className="webinar-card">
                <div className="webinar-date-box">
                  <span className="w-day">{webinar.date.split(' ')[0]}</span>
                  <span className="w-month">{webinar.date.split(' ')[1]}</span>
                </div>
                <div className="webinar-content">
                  <div className="w-type">{webinar.type}</div>
                  <h3 className="w-title">{webinar.topic}</h3>
                  <div className="w-meta">
                    <span className="meta-speaker"><Video size={14} /> {webinar.speaker}</span>
                    <span className="meta-time"><Clock size={14} /> {webinar.time}</span>
                  </div>
                </div>
                <div className="webinar-action">
                  <button className="btn btn-outline btn-sm">রেজিস্ট্রেশন</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebinarSchedule;
