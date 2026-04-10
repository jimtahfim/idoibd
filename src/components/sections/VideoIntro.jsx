import React from 'react';
import { Play } from 'lucide-react';
import './VideoIntro.css';

const VideoIntro = () => {
  return (
    <section className="section section-bg-white">
      <div className="container">
        <div className="video-intro-container text-center">
          <h2 className="h2 text-dark">আমাদের প্রতিষ্ঠান সম্পর্কে জানুন</h2>
          <p className="p-large mb-6" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
            বিশুদ্ধ কুরআন শিক্ষা থেকে শুরু করে উচ্চতর ফিকহ পর্যন্ত আমাদের লক্ষ্য, দক্ষ আলেমদের তত্ত্বাবধানে ঘরে বসেই ইসলামি জ্ঞান অর্জনের সুযোগ করে দেওয়া।
          </p>
          
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/CsEelKg6SfA?si=GPJgsmbclPmw-Bui" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 'inherit' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
