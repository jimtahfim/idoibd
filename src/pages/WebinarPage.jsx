import React, { useEffect } from 'react';
import WebinarSchedule from '../components/sections/WebinarSchedule';

const WebinarPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--bg-mint)', minHeight: '80vh' }}>
      <WebinarSchedule />
    </div>
  );
};

export default WebinarPage;
