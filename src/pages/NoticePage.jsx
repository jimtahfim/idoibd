import React, { useEffect } from 'react';
import NoticeBoard from '../components/sections/NoticeBoard';

const NoticePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh' }}>
      <NoticeBoard />
    </div>
  );
};

export default NoticePage;
