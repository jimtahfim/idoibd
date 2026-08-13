import React, { useEffect } from 'react';
import siteData from '../data/site.json';

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '140px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh', paddingBottom: '80px' }}>
      <div className="container text-center">
        <h1 className="h2 text-dark mb-6">আমাদের সম্পর্কে</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(11, 93, 67, 0.05)' }}>
          <p className="p-large" style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{siteData.about}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
