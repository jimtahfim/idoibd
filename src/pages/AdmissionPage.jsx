import React, { useEffect } from 'react';
import { ExternalLink, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import AdmissionProcess from '../components/sections/AdmissionProcess';

const ADMISSION_URL = "https://admission.idoibd.com/";

const AdmissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Auto redirect to external admission portal
    const timer = setTimeout(() => {
      window.location.href = ADMISSION_URL;
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--neutral-soft)', minHeight: '85vh', paddingBottom: '80px' }}>
      
      {/* Visual Roadmap Section */}
      <AdmissionProcess />
      
      {/* Elevated Portal Card */}
      <div className="container" id="enroll-portal">
        <div style={{ 
          maxWidth: '680px', 
          margin: '0 auto', 
          backgroundColor: 'white', 
          borderRadius: '24px', 
          boxShadow: '0 20px 40px -10px rgba(11, 93, 67, 0.12)',
          border: '1px solid rgba(11, 93, 67, 0.1)',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '48px 32px'
        }}>
          
          <div style={{ 
            width: '70px', 
            height: '70px', 
            borderRadius: '50%', 
            background: 'var(--bg-mint)', 
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <ShieldCheck size={36} />
          </div>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'rgba(11, 93, 67, 0.08)', 
            color: 'var(--primary)', 
            padding: '6px 16px', 
            borderRadius: '20px', 
            fontWeight: '700', 
            fontSize: '0.85rem',
            marginBottom: '16px'
          }}>
            <Sparkles size={14} /> অফিশিয়াল ভর্তি পোর্টাল
          </div>

          <h2 className="h2 text-dark" style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            অফিশিয়াল ভর্তি পোর্টালে যুক্ত হোন
          </h2>

          <p className="p-base text-muted" style={{ maxWidth: '480px', margin: '0 auto 28px auto', lineHeight: '1.6' }}>
            আপনার পছন্দের কোর্সে ভর্তি হতে আমাদের অনলাইন ভর্তি পোর্টালে সরাসরি প্রবেশ করুন। আপনাকে পোর্টালে রিডাইরেক্ট করা হচ্ছে...
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <a 
              href={ADMISSION_URL} 
              className="btn btn-primary" 
              style={{ padding: '14px 32px', fontSize: '1.1rem', borderRadius: '30px' }}
            >
              ভর্তি পোর্টালে যান (admission.idoibd.com) <ExternalLink size={18} />
            </a>

            <a 
              href="/courses" 
              className="btn btn-outline" 
              style={{ border: 'none', color: 'var(--text-muted)', fontSize: '0.95rem' }}
            >
              কোর্সসমূহ পুনর্নিরীক্ষণ করুন <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
