import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, FileText, Award } from 'lucide-react';
import './QuickStats.css';
import statsData from '../../data/stats.json';

const iconMap = {
  Users: <Users size={32} />,
  BookOpen: <BookOpen size={32} />,
  FileText: <FileText size={32} />,
  Award: <Award size={32} />
};

const QuickStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section bg-white stats-section" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`stat-card ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon-wrapper">
                {iconMap[stat.icon]}
              </div>
              <h2 className="stat-number">
                {isVisible ? <CountUp end={stat.count} /> : '০'}+
              </h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple CountUp Component for Bangla Numbers
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  // Convert English numbers to Bangla visually 
  const bnNum = count.toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);

  return <span>{bnNum}</span>;
};

export default QuickStats;
