import React, { useEffect } from 'react';

const DirectorPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ paddingTop: '140px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ 
          maxWidth: '850px', margin: '0 auto',
          backgroundColor: 'white', padding: '0', 
          borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(11, 93, 67, 0.12)',
          border: '1px solid rgba(11, 93, 67, 0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Elegant Top Banner */}
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, #06402d 100%)', 
            height: '160px', position: 'relative' 
          }}>
            {/* Elevated Avatar */}
            <div style={{ 
              position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)',
              width: '160px', height: '160px', backgroundColor: 'white', 
              borderRadius: '50%', padding: '6px', 
              boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="/director.jpg" 
                alt="Director" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://ui-avatars.com/api/?name=Mufti+Hafizur&background=0B5D43&color=fff&size=160";
                }}
              />
            </div>
          </div>
          
          {/* Main Content Area */}
          <div style={{ padding: '100px 40px 60px', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '1rem', color: 'var(--accent)', fontWeight: '700', 
              marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' 
            }}>
              কোর্স পরিচালনায়
            </h2>
            
            <h1 style={{ 
              fontSize: '2.4rem', color: 'var(--text-dark)', fontWeight: '800', 
              marginBottom: '20px', lineHeight: '1.2' 
            }}>
              মুফতী হাফিজুর রহমান মেহেরপুরী <span style={{fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: '600'}}>দা.বা.</span>
            </h1>
            
            <div style={{ 
              height: '3px', width: '60px', backgroundColor: 'var(--primary)', 
              margin: '0 auto 40px', borderRadius: '2px', opacity: '0.4'
            }}></div>
            
            {/* Professional Credentials Cards */}
            <div style={{ 
              display: 'flex', flexDirection: 'column', gap: '20px', 
              alignItems: 'center', maxWidth: '650px', margin: '0 auto' 
            }}>
              
              <div style={{ 
                background: 'var(--bg-mint)', padding: '25px 35px', 
                borderRadius: '16px', width: '100%', borderLeft: '5px solid var(--primary)',
                textAlign: 'left', transition: 'transform 0.3s', cursor: 'default'
              }} className="hover-lift">
                <div style={{ fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '8px' }}>
                  প্রতিষ্ঠাতা-পরিচালক, প্রধান মুফতী ও শায়খুল হাদীস
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: '600' }}>
                  জামিয়া ইসলামিয়া মেহেরপুর
                </div>
              </div>

              <div style={{ 
                background: 'var(--bg-mint)', padding: '25px 35px', 
                borderRadius: '16px', width: '100%', borderLeft: '5px solid var(--accent)',
                textAlign: 'left', transition: 'transform 0.3s', cursor: 'default'
              }} className="hover-lift">
                <div style={{ fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '8px' }}>
                  শায়খুল হাদীস
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: '600' }}>
                  জামিয়া আরাবিয়া আশরাফুল উলূম, কুষ্টিয়া
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;
