import React, { useEffect } from 'react';
import siteData from '../data/site.json';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: '140px', backgroundColor: 'var(--neutral-soft)', minHeight: '80vh', paddingBottom: '80px' }}>
      <div className="container text-center">
        <h1 className="h2 text-dark mb-6">যোগাযোগ করুন</h1>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(11, 93, 67, 0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', textAlign: 'left' }}>
            <p style={{ display: 'flex', gap: '15px', color: 'var(--text-dark)', fontSize: '1.1rem' }}>
              <Phone style={{ color: 'var(--accent)' }}/> {siteData.contact.phone}
            </p>
            <p style={{ display: 'flex', gap: '15px', color: 'var(--text-dark)', fontSize: '1.1rem' }}>
              <Mail style={{ color: 'var(--accent)' }}/> {siteData.contact.email}
            </p>
            <p style={{ display: 'flex', gap: '15px', color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              <MapPin style={{ color: 'var(--accent)' , flexShrink: 0}}/> {siteData.contact.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
