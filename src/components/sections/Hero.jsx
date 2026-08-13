import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const services = [
  "অনলাইন ইসলামিক কোর্স",
  "কুরআন শিক্ষা",
  "আরবি ভাষা শিক্ষা",
  "ফতোয়া ও মাসায়েল",
  "ইসলামিক দিকনির্দেশনা",
  "লাইভ ওয়েবিনার"
];

const sliderImages = [
  "/images/hero_slide_1_1775794201184.png",
  "/images/hero_slide_2_1775794216483.png",
  "/images/about_img_1775794261757.png"
];

const Hero = () => {
  const [currentService, setCurrentService] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = services[serviceIndex];
      if (isDeleting) {
        setCurrentService(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentService(prev => fullText.substring(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentService === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentService === '') {
        setIsDeleting(false);
        setServiceIndex((prev) => (prev + 1) % services.length);
        setTypingSpeed(500); 
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentService, isDeleting, serviceIndex, typingSpeed]);

  // Image Slider Auto-play effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 10000); // 10 seconds
    return () => clearInterval(slideTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-accent"></div>
      <div className="container hero-container grid grid-cols-2">
        <div className="hero-content animate-slide-up">
          <div className="badge-pill mb-4">
            <span className="badge-dot"></span> বিশ্বস্ত ই-লার্নিং প্ল্যাটফর্ম
          </div>
          <h1 className="h1 mb-4 text-dark">
            আপনার জন্য<br/>
            <span className="text-primary typed-text-wrapper">
              {currentService}<span className="cursor">|</span>
            </span>
          </h1>
          <p className="p-large mb-6 hero-desc">
            ইসলামিক দাওয়াহ অনলাইন ইনস্টিটিউট-এ আপনাকে স্বাগতম। ঘরে বসেই বিশুদ্ধ জ্ঞান অর্জন করুন দেশের সেরা আলেমদের তত্ত্বাবধানে।
          </p>
          <div className="hero-actions flex gap-4">
            <a href="#courses" className="btn btn-primary">
              কোর্স দেখুন <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-outline">
              বিস্তারিত জানুন <PlayCircle size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in">
          <div className="visual-wrapper slider-wrapper">
            {sliderImages.map((imgSrc, idx) => (
              <img 
                key={idx}
                src={imgSrc} 
                alt={`Islamic Education ${idx + 1}`} 
                className={`hero-main-img ${idx === currentSlide ? 'active' : ''}`}
              />
            ))}
            
            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-btn"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="slider-btn"><ChevronRight size={24} /></button>
            </div>
            
            <div className="slider-indicators">
              {sliderImages.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
