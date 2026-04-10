import React from 'react';
import { MonitorPlay, Video, Award, MessageCircleHeart } from 'lucide-react';
import './ServicesStrip.css';

const services = [
  { id: 1, title: "লাইভ ক্লাস", icon: <MonitorPlay size={28} />, desc: "ইন্টারেক্টিভ সেশন" },
  { id: 2, title: "রেকর্ডেড লেকচার", icon: <Video size={28} />, desc: "যেকোনো সময় দেখুন" },
  { id: 3, title: "সার্টিফিকেট", icon: <Award size={28} />, desc: "কোর্স শেষে স্বীকৃতি" },
  { id: 4, title: "কমিউনিটি সাপোর্ট", icon: <MessageCircleHeart size={28} />, desc: "সার্বক্ষণিক সহায়তা" }
];

const ServicesStrip = () => {
  return (
    <section className="services-strip section-bg-mint">
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-item flex items-center gap-4">
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-text">
                <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{service.title}</h3>
                <p className="p-small">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesStrip;
