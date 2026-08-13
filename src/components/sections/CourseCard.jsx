import React, { useState } from 'react';
import { Clock, Video, BookOpen, GraduationCap, Briefcase, ExternalLink, Info, X, Sparkles, CheckCircle2 } from 'lucide-react';
import './CourseCard.css';

const ADMISSION_URL = "https://admission.idoibd.com/";

const categoryThemeMap = {
  "মাদ্রাসা শিক্ষার্থী": {
    bgClass: "cat-madrasa-bg",
    badgeClass: "badge-madrasa",
    icon: <BookOpen size={20} />
  },
  "জেনারেল ছাত্র": {
    bgClass: "cat-general-bg",
    badgeClass: "badge-general",
    icon: <GraduationCap size={20} />
  },
  "সাধারণ ও কর্মজীবি": {
    bgClass: "cat-pro-bg",
    badgeClass: "badge-pro",
    icon: <Briefcase size={20} />
  }
};

const CourseCard = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  const theme = categoryThemeMap[course.category] || categoryThemeMap["সাধারণ ও কর্মজীবি"];

  const formatFee = (fee) => {
    if (!fee || fee === 0) return "বিনামূল্যে";
    return `৳ ${fee.toLocaleString('bn-BD') || fee}`;
  };

  return (
    <>
      <div className="course-card">
        {/* Banner Header */}
        <div className={`course-card-header ${theme.bgClass}`}>
          <div className="header-overlay"></div>
          <div className="header-top-meta">
            <span className={`category-badge ${theme.badgeClass}`}>
              {theme.icon}
              {course.category}
            </span>
            <span className="mode-badge">
              <Video size={13} /> {course.learningMode}
            </span>
          </div>

          <div className="header-center-icon">
            {theme.icon}
          </div>

          <div className="duration-pill">
            <Clock size={14} /> {course.duration}
          </div>
        </div>
        
        {/* Content */}
        <div className="course-card-body">
          <h3 className="course-title">{course.name}</h3>
          <p className="course-short-desc">{course.shortDescription}</p>

          <div className="course-card-footer">
            <div className="course-fee-container">
              <span className="fee-label">কোর্স ফি</span>
              <span className="fee-amount">{formatFee(course.fee)}</span>
            </div>

            <div className="course-card-actions">
              <button 
                onClick={() => setShowModal(true)} 
                className="btn-details"
                title="বিস্তারিত বিবরণ"
              >
                <Info size={16} /> বিবরণ
              </button>
              <a 
                href={ADMISSION_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-admission"
              >
                ভর্তি হন <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {showModal && (
        <div className="course-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="course-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              <X size={20} />
            </button>

            <div className={`modal-header ${theme.bgClass}`}>
              <div className="modal-category-badge">
                {theme.icon} {course.category}
              </div>
              <h2 className="modal-title">{course.name}</h2>
              <p className="modal-subtitle">{course.shortDescription}</p>
            </div>

            <div className="modal-body">
              <div className="modal-meta-grid">
                <div className="meta-box">
                  <span className="meta-box-label">কোর্স মেয়াদ</span>
                  <span className="meta-box-value"><Clock size={16} /> {course.duration}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-box-label">শেখার মাধ্যম</span>
                  <span className="meta-box-value"><Video size={16} /> {course.learningMode}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-box-label">কোর্স ফি</span>
                  <span className="meta-box-value highlight">{formatFee(course.fee)}</span>
                </div>
              </div>

              <div className="modal-description-section">
                <h4 className="description-heading">
                  <Sparkles size={18} color="var(--primary)" /> কোর্স বিবরণ
                </h4>
                <p className="description-text">{course.description}</p>
              </div>

              <div className="modal-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={16} color="var(--accent)" /> সরাসরি অনলাইন লাইভ ক্লাস
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} color="var(--accent)" /> বিশেষ প্রশ্নোত্তরের সুবিধা
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} color="var(--accent)" /> সার্টিফিকেট ও মূল্যায়ন
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-modal-cancel" onClick={() => setShowModal(false)}>
                  বন্ধ করুন
                </button>
                <a 
                  href={ADMISSION_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-modal-admission"
                >
                  এখনই ভর্তি হন <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
