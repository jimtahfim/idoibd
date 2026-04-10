import React, { useEffect } from 'react';
import CoursesSection from '../components/sections/CoursesSection';
import Categories from '../components/sections/Categories';

const CoursesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh' }}>
      <CoursesSection />
      <Categories />
    </div>
  );
};

export default CoursesPage;
