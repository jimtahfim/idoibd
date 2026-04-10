import React, { useEffect, useState } from 'react';
import articlesData from '../data/articles.json';
import { CalendarRange, User, X, BookOpen } from 'lucide-react';

const ArticlesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div style={{ paddingTop: '120px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="h2 text-dark">প্রবন্ধ</h2>
          <p className="p-large" style={{ color: 'var(--text-muted)', marginTop: '16px' }}>
            ইসলামিক জ্ঞান, জীবনযাপন এবং সমসাময়িক বিষয়ে আমাদের প্রবন্ধসমূহ পড়ুন
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <div key={article.id} className="glass hover-lift" style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'white' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <BookOpen size={14} /> প্রবন্ধ
                </div>
              </div>
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="flex justify-between items-center mb-3" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>
                  <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
                  <span className="flex items-center gap-1"><CalendarRange size={14} /> {article.date}</span>
                </div>
                <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-dark)', lineHeight: '1.4' }}>
                  {article.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                  {article.excerpt}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="btn btn-outline" 
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    আরও পড়ুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup overlay */}
      {selectedArticle && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
          zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px', animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Modal Content */}
          <div style={{
            backgroundColor: 'white', borderRadius: '24px', maxWidth: '800px', width: '100%', 
            maxHeight: '90vh', overflowY: 'auto', position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute', top: '20px', right: '20px', 
                background: 'rgba(255,255,255,0.8)', border: 'none',
                width: '40px', height: '40px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                color: 'var(--text-dark)'
              }}
            >
              <X size={24} />
            </button>

            {/* Modal Header Image */}
            <div style={{ height: '300px', widdth: '100%', position: 'relative' }}>
              <img src={selectedArticle.imageUrl} alt={selectedArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)' }}></div>
              <h2 style={{ position: 'absolute', bottom: '20px', left: '30px', right: '30px', color: 'white', fontSize: '2rem', lineHeight: '1.2', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {selectedArticle.title}
              </h2>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '30px', backgroundColor: 'var(--bg-mint)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '25px', padding: '15px 20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600' }}>
                  <div style={{ background: 'rgba(11, 93, 67, 0.1)', padding: '8px', borderRadius: '50%' }}><User size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>লেখক</div>
                    <div>{selectedArticle.author}</div>
                  </div>
                </div>
                <div style={{ width: '1px', background: '#e0e0e0', margin: '0 10px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600' }}>
                  <div style={{ background: 'rgba(11, 93, 67, 0.1)', padding: '8px', borderRadius: '50%' }}><CalendarRange size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>প্রকাশের তারিখ</div>
                    <div>{selectedArticle.date}</div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)', borderLeft: '4px solid var(--accent)' }}>
                <p style={{ marginBottom: '20px' }}>
                  {selectedArticle.excerpt}
                </p>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  (এই প্রবন্ধের পূর্ণাঙ্গ সংস্করণ খুব শিগগিরই সাইটে আপডেট করা হবে ইনশাআল্লাহ। আমাদের সাথেই থাকুন।)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Adding animation keyframes inline for simplicity */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
};

export default ArticlesPage;
