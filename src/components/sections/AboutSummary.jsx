import React from 'react';
import { PhoneCall, Send } from 'lucide-react';
import siteData from '../../data/site.json';

const AboutSummary = () => {
  const phones = siteData.contact.phone.split(',').map(p => p.trim());
  const toEnglishDigits = (str) => str.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d)).replace(/[^0-9+]/g, '');

  return (
    <section className="section section-bg-mint" id="about">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-2 gap-8 items-center" style={{ gap: '60px' }}>
          <div className="about-content">
            <h2 className="h2 text-dark mb-4">আমাদের সম্পর্কে</h2>
            <p className="p-large mb-4 text-justify" style={{ lineHeight: '1.8' }}>
              ইসলামিক দাওয়াহ অনলাইন ইনস্টিটিউট (IDOI) একটি আধুনিক ই-লার্নিং প্ল্যাটফর্ম। আমাদের মূল লক্ষ্য হল পৃথিবীর যেকোনো প্রান্ত থেকে বাংলা ভাষাভাষী মুসলিমদের কাছে বিশুদ্ধ ইসলামি জ্ঞান নির্ভরযোগ্য আলেমদের মাধ্যমে পৌঁছে দেওয়া।
            </p>
            <p className="p-large mb-6 text-justify" style={{ lineHeight: '1.8' }}>
              সহজ সিলেবাস, অভিজ্ঞ শিক্ষক ও আধুনিক প্রযুক্তির সমন্বয়ে আমরা দ্বীনি শিক্ষাকে করেছি আরও সহজগামী। আমাদের সাথে যুক্ত হয়ে আপনিও শুরু করতে পারেন আপনার জ্ঞান অর্জনের পবিত্র পথচলা।
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">
                বিস্তারিত পড়ুন
              </button>
            </div>
          </div>
          
          <div className="about-visual position-relative">
            <img 
              src="/images/about_img_1775794261757.png" 
              alt="About IDOI" 
              style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* CTA Section attached below About visually */}
      <div className="container mt-8" style={{ marginTop: '80px' }} id="contact">
        <div className="glass" style={{ backgroundColor: 'var(--primary)', backgroundImage: 'linear-gradient(45deg, var(--primary) 0%, var(--primary-light) 100%)', borderRadius: 'var(--radius-xl)', padding: '50px', textAlign: 'center', color: 'white', boxShadow: 'var(--shadow-lg)' }}>
          <h2 className="h2 text-white mb-4">যেকোনো প্রয়োজনে যোগাযোগ করুন</h2>
          <p className="p-large text-white mb-6" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 30px auto' }}>
            ভর্তি সংক্রান্ত বা অন্য যেকোনো তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন। আমাদের সাপোর্ট টিম আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {phones.map((phone, idx) => (
              <a key={idx} href={`tel:${toEnglishDigits(phone)}`} className="btn btn-white">
                <PhoneCall size={20} /> {phone}
              </a>
            ))}
            <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-accent">
              হোয়াটসঅ্যাপে মেসেজ দিন
            </a>
            <a href={siteData.socials.telegram} target="_blank" rel="noreferrer" className="btn btn-telegram">
              <Send size={20} /> টেলিগ্রামে মেসেজ দিন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
