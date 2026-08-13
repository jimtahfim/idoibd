import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Video, Send, Heart, MessageCircle } from 'lucide-react';
import './Footer.css';
import siteData from '../../data/site.json';

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      alert('সফলভাবে সাবস্ক্রাইব করা হয়েছে: ' + email);
      setEmail('');
    }
  };

  return (
    <footer className="footer section-bg-dark">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
             <Link to="/" className="footer-brand" style={{ display: 'inline-block', marginBottom: '25px', backgroundColor: 'white', padding: '12px 20px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
              <img src="/logo.png" alt="IDOI Logo" className="footer-brand-logo" style={{ height: '70px' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div className="brand-fallback-text" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                <span className="brand-icon">☪</span> {siteData.shortName}
              </div>
            </Link>
            <p className="footer-about">
              {siteData.about}
            </p>
            <div className="social-links">
              <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="fb"><FacebookIcon size={20} /></a>
              <a href={siteData.socials.youtube || '#'} target="_blank" rel="noopener noreferrer" title="YouTube" className="yt"><YoutubeIcon size={20} /></a>
              <a href={siteData.socials.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="wa"><MessageCircle size={20} /></a>
              <a href={siteData.socials.telegram} target="_blank" rel="noopener noreferrer" title="Telegram" className="tg"><Send size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">কুইক লিংকস</h4>
            <ul className="footer-links">
              <li><Link to="/about">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/courses">সকল কোর্স</Link></li>
              <li><Link to="/director">কোর্স পরিচালক</Link></li>
              <li><Link to="/notice">নোটিশ বোর্ড</Link></li>
              <li><Link to="/contact">যোগাযোগ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">যোগাযোগ</h4>
            <ul className="footer-contact">
              <li><Phone size={18} /> <span>{siteData.contact.phone}</span></li>
              <li><Mail size={18} /> <span>{siteData.contact.email}</span></li>
              <li><MapPin size={18} /> <span>{siteData.contact.address}</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">নিউজলেটার</h4>
            <p className="newsletter-text">নতুন কোর্স এবং আপডেটের খবর সবার আগে পেতে ইমেইল সাবস্ক্রাইব করুন।</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="আপনার ইমেইল দিন" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-subscribe">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {siteData.nameBangla}. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="developer-tag">
            <span>উন্নয়নে</span> <Heart size={14} className="heart-icon" /> <span>IDOI টিম</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
