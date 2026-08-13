import React, { useEffect, useState } from 'react';
import fatwaData from '../data/fatwa.json';
import { ChevronDown, ChevronUp, CheckCircle, HelpCircle } from 'lucide-react';

const FatwaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    if (openId === id) setOpenId(null);
    else setOpenId(id);
  };

  return (
    <div style={{ paddingTop: '120px', backgroundColor: 'var(--bg-mint)', minHeight: '80vh', paddingBottom: '80px' }}>
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="h2 text-dark">ফতোয়া বিভাগ</h2>
          <p className="p-large" style={{ color: 'var(--text-muted)' }}>আপনার দৈনন্দিন জীবনের শরয়ী জিজ্ঞাসা এবং নির্ভরযোগ্য সমাধান</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {fatwaData.map((fatwa) => (
            <div key={fatwa.id} className="glass hover-lift" style={{ marginBottom: '16px', borderRadius: '12px', overflow: 'hidden' }}>
              <button 
                onClick={() => toggle(fatwa.id)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px', background: 'white', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <h3 style={{ fontSize: '1.15rem', lineHeight: '1.5', color: 'var(--text-dark)', margin: 0, display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <HelpCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  {fatwa.question}
                </h3>
                <div style={{ color: 'var(--primary)', flexShrink: 0, marginLeft: '16px' }}>
                  {openId === fatwa.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {openId === fatwa.id && (
                <div style={{ padding: '0 24px 24px 60px', background: 'white' }}>
                  <div style={{ paddingTop: '16px', borderTop: '1px dashed rgba(11, 93, 67, 0.2)', color: 'var(--text-dark)', lineHeight: '1.7' }}>
                    <p style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', margin: 0 }}>
                      <CheckCircle size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
                      <span>{fatwa.answer}</span>
                    </p>
                  </div>
                  <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--neutral-soft)', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '10px' }}>
                    <span><strong>উত্তরদাতা:</strong> {fatwa.mufti}</span>
                    <span style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ background: 'var(--neutral-soft)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold' }}>{fatwa.category}</span>
                      <span>{fatwa.date}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FatwaPage;
