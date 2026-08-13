import React, { useEffect } from 'react';
import FAQ from '../components/sections/FAQ';

const FAQPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh' }}>
      <FAQ />
    </div>
  );
};

export default FAQPage;
