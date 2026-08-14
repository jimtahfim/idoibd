import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import './Navbar.css';

const ADMISSION_URL = "https://admission.idoibd.com/";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'solid shadow-sm' : 'transparent'}`}>
      <div className="container nav-container">
        <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="IDOI Logo" className="brand-logo" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          
          <div className="brand-title desktop-only" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', lineHeight: '1.2' }}>
              ইসলামিক দাওয়াহ
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent)', lineHeight: '1.2' }}>
              অনলাইন ইনস্টিটিউট
            </span>
          </div>

          <span className="brand-fallback-text" style={{ display: 'none', color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem' }}>
            <span style={{ color: 'var(--accent)', marginRight: '8px' }}>☪</span>IDOI
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          <li><Link to="/">হোম</Link></li>
          <li 
            className="dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('courses')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/courses" className="dropdown-trigger cursor-pointer">
              কোর্সসমূহ <ChevronDown size={16} />
            </Link>
            {activeDropdown === 'courses' && (
              <ul className="dropdown-menu">
                <li><Link to="/courses">সকল কোর্স</Link></li>
                <li><Link to="/courses#madrasa">মাদরাসা শিক্ষার্থী</Link></li>
                <li><Link to="/courses#general">জেনারেল ছাত্র</Link></li>
                <li><Link to="/courses#pro">সাধারণ ও কর্মজীবি</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/articles">প্রবন্ধ</Link></li>
          <li><Link to="/fatwa">ফতোয়া বিভাগ</Link></li>
          <li><Link to="/webinar">ওয়েবিনার</Link></li>
          <li><Link to="/notice">নোটিশ</Link></li>
          <li><Link to="/faq">জিজ্ঞাসা</Link></li>
        </ul>

        <div className="nav-actions desktop-only">
          <a 
            href={ADMISSION_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            ভর্তি হন <ExternalLink size={15} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-links">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>হোম</Link></li>
            <li><span className="dropdown-label">কোর্সসমূহ</span>
              <ul className="sub-links">
                <li><Link to="/courses" onClick={() => setMobileMenuOpen(false)}>সকল কোর্স</Link></li>
                <li><Link to="/courses#madrasa" onClick={() => setMobileMenuOpen(false)}>মাদরাসা শিক্ষার্থী</Link></li>
                <li><Link to="/courses#general" onClick={() => setMobileMenuOpen(false)}>জেনারেল ছাত্র</Link></li>
                <li><Link to="/courses#pro" onClick={() => setMobileMenuOpen(false)}>সাধারণ ও কর্মজীবি</Link></li>
              </ul>
            </li>
            <li><Link to="/articles" onClick={() => setMobileMenuOpen(false)}>প্রবন্ধ</Link></li>
            <li><Link to="/fatwa" onClick={() => setMobileMenuOpen(false)}>ফতোয়া বিভাগ</Link></li>
            <li><Link to="/webinar" onClick={() => setMobileMenuOpen(false)}>ওয়েবিনার</Link></li>
            <li><Link to="/notice" onClick={() => setMobileMenuOpen(false)}>নোটিশ</Link></li>
            <li><Link to="/faq" onClick={() => setMobileMenuOpen(false)}>জিজ্ঞাসা</Link></li>
          </ul>
          <div className="mobile-footer">
            <a 
              href={ADMISSION_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary w-full" 
              onClick={() => setMobileMenuOpen(false)}
            >
              ভর্তি হন <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
