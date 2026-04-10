import React, { useEffect } from 'react';
import AdmissionProcess from '../components/sections/AdmissionProcess';

const AdmissionPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh', paddingBottom: '100px' }}>
      
      {/* Visual Roadmap Section */}
      <AdmissionProcess />
      
      {/* Elevated Form Container */}
      <div className="container" id="enroll-form" style={{ marginTop: '0px' }}>
        <div style={{ 
          maxWidth: '750px', 
          margin: '0 auto', 
          backgroundColor: 'white', 
          borderRadius: '30px', 
          boxShadow: '0 25px 50px -12px rgba(11, 93, 67, 0.15)',
          border: '1px solid rgba(11, 93, 67, 0.05)',
          overflow: 'hidden'
        }}>
          
          {/* Creative Header inside the form card */}
          <div style={{ 
            padding: '40px 30px 20px 30px', 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, rgba(234, 247, 241, 0.5) 0%, rgba(255, 255, 255, 1) 100%)',
            borderBottom: '1px solid var(--neutral-soft)'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(11, 93, 67, 0.1)', 
              color: 'var(--primary)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontWeight: '600', 
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span> 
              ফর্ম পূরণ করুন
            </div>
            <h2 className="h2 text-dark" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>ভর্তি চূড়ান্ত করুন</h2>
            <p className="p-base text-muted" style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
              নিচের ফর্মটি নির্ভুলভাবে পূরণ করে সাবমিট করুন। আমাদের প্রতিনিধি আপনার প্রদত্ত নাম্বারে যোগাযোগ করে ভর্তি প্রক্রিয়া সম্পন্ন করবেন।
            </p>
          </div>
          
          {/* Iframe Logic with loading state */}
          <div style={{ position: 'relative', width: '100%', minHeight: '1200px', background: 'var(--neutral-soft)' }}>
            
            {/* Loading Indicator behind iframe */}
            <div style={{ position: 'absolute', top: '100px', left: 0, right: 0, textAlign: 'center', color: 'var(--primary)', zIndex: 0 }}>
              <div style={{ 
                width: '40px', height: '40px', 
                border: '3px solid rgba(11, 93, 67, 0.2)', 
                borderTopColor: 'var(--primary)', 
                borderRadius: '50%', 
                margin: '0 auto 15px',
                animation: 'spin 1s linear infinite'
              }}></div>
              <p style={{ fontWeight: '500' }}>ফর্ম লোড হচ্ছে...</p>
            </div>
            
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZUwII0WvZKs3c1eDu7CuaPAUDiPlYUGzN7W8SJNg879dXsQ/viewform?embedded=true" 
              style={{ width: '100%', height: '1600px', border: 'none', position: 'relative', zIndex: 1 }} 
              title="IDOI Admission Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      
      {/* Add spin animation dynamically for the loader */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AdmissionPage;
