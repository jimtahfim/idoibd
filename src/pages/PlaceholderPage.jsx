import React, { useEffect } from 'react';

const PlaceholderPage = ({ title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', minHeight: '80vh', backgroundColor: 'var(--neutral-soft)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="h1 text-dark mb-4">{title}</h1>
      <p className="p-large mb-8">এই পেইজটির কাজ দ্রুতই সম্পূর্ণ হবে ইনশাআল্লাহ।</p>
      <a href="/" className="btn btn-primary">হোমে ফিরে যান</a>
    </div>
  );
};

export default PlaceholderPage;
