import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Video, BookOpen, GraduationCap, Briefcase, ExternalLink, ArrowLeft, Sparkles, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useCourseDetail } from '../hooks/useCourses';
import { formatCourseFee } from '../lib/utils/numberUtils';
import './CourseDetailPage.css';

const DEFAULT_ADMISSION_URL = "https://admission.idoibd.com/";

const categoryThemeMap = {
  "মাদ্রাসা শিক্ষার্থী": {
    bgClass: "cat-madrasa-bg",
    badgeClass: "badge-madrasa",
    icon: <BookOpen size={22} />
  },
  "জেনারেল ছাত্র": {
    bgClass: "cat-general-bg",
    badgeClass: "badge-general",
    icon: <GraduationCap size={22} />
  },
  "সাধারণ ও কর্মজীবি": {
    bgClass: "cat-pro-bg",
    badgeClass: "badge-pro",
    icon: <Briefcase size={22} />
  }
};

const CourseDetailPage = () => {
  const { slug } = useParams();
  const { course, loading, error, notFound, refetch } = useCourseDetail(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (course && course.name) {
      document.title = `${course.name} | IDOI - ইসলামি দাওয়াহ ও গবেষণা ইনস্টিটিউট`;
    } else if (notFound) {
      document.title = `কোর্স পাওয়া যায়নি | IDOI`;
    } else {
      document.title = `কোর্স বিস্তারিত | IDOI`;
    }
  }, [course, notFound]);

  const theme = (course && categoryThemeMap[course.category]) || categoryThemeMap["সাধারণ ও কর্মজীবি"];
  const admissionUrl = (course && course.admissionUrl) || (slug ? `${DEFAULT_ADMISSION_URL}?course=${slug}` : DEFAULT_ADMISSION_URL);

  return (
    <div className="course-detail-page-wrapper">
      <div className="container">
        {/* Back Link */}
        <div className="detail-top-nav">
          <Link to="/courses" className="back-link">
            <ArrowLeft size={18} /> সকল কোর্সে ফিরে যান
          </Link>
        </div>

        {/* Loading Skeleton State */}
        {loading && (
          <div className="detail-skeleton-card">
            <div className="skeleton-banner-large"></div>
            <div className="skeleton-line-large"></div>
            <div className="skeleton-line-medium"></div>
            <div className="skeleton-line-full"></div>
          </div>
        )}

        {/* 404 Not Found State */}
        {!loading && notFound && (
          <div className="detail-empty-card">
            <AlertCircle size={56} color="#d97706" style={{ margin: '0 auto 16px auto' }} />
            <h2>কোর্সটি খুঁজে পাওয়া যায়নি!</h2>
            <p>আপনার কাঙ্ক্ষিত স্লাগ "{slug}" দিয়ে কোনো কোর্স আমাদের সিস্টেমে খুঁজে পাওয়া যায়নি।</p>
            <Link to="/courses" className="btn btn-primary" style={{ marginTop: '20px' }}>
              সকল কোর্স তালিকা দেখুন
            </Link>
          </div>
        )}

        {/* Generic Error State */}
        {!loading && !notFound && error && (
          <div className="detail-error-card">
            <AlertCircle size={56} color="#dc2626" style={{ margin: '0 auto 16px auto' }} />
            <h2>কোর্সের বিস্তারিত তথ্য লোড করতে সমস্যা হয়েছে</h2>
            <p>{error}</p>
            <button className="btn-retry" onClick={refetch} style={{ marginTop: '20px' }}>
              <RefreshCw size={16} /> পুনরায় চেষ্টা করুন
            </button>
          </div>
        )}

        {/* Course Details Content */}
        {!loading && !notFound && !error && course && (
          <div className="course-detail-card">
            {/* Header Banner */}
            <div className={`detail-card-header ${theme.bgClass}`}>
              <div className="header-badge-row">
                <span className={`category-badge ${theme.badgeClass}`}>
                  {theme.icon} {course.category}
                </span>
                <span className="mode-badge">
                  <Video size={14} /> {course.learningMode}
                </span>
              </div>
              <h1 className="detail-title">{course.name}</h1>
              <p className="detail-subtitle">{course.shortDescription}</p>
            </div>

            {/* Content Body */}
            <div className="detail-card-body">
              {/* Meta Grid */}
              <div className="detail-meta-grid">
                <div className="meta-box">
                  <span className="meta-box-label">কোর্স মেয়াদ</span>
                  <span className="meta-box-value"><Clock size={18} /> {course.duration}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-box-label">শেখার মাধ্যম</span>
                  <span className="meta-box-value"><Video size={18} /> {course.learningMode}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-box-label">কোর্স ফি</span>
                  <span className="meta-box-value highlight">{formatCourseFee(course.fee)}</span>
                </div>
              </div>

              {/* Course Description */}
              <div className="detail-section">
                <h3 className="section-title">
                  <Sparkles size={20} color="var(--primary)" /> কোর্স বিবরণ
                </h3>
                <p className="description-text">
                  {course.description || course.shortDescription}
                </p>
              </div>

              {/* Highlights / Features */}
              <div className="detail-section">
                <h3 className="section-title">কোর্সের প্রধান বৈশিষ্ট্যসমূহ</h3>
                <div className="highlights-grid">
                  <div className="highlight-card">
                    <CheckCircle2 size={20} color="var(--primary)" />
                    <div>
                      <strong>সরাসরি লাইভ অনলাইন ক্লাস</strong>
                      <p>উস্তাদগণের সরাসরি তথ্যভিত্তিক ও ইন্টারেক্টিভ ক্লাস নেওয়ার সুবিধা।</p>
                    </div>
                  </div>
                  <div className="highlight-card">
                    <CheckCircle2 size={20} color="var(--primary)" />
                    <div>
                      <strong>প্রশ্নোত্তর ও আলোচনা পর্ব</strong>
                      <p>প্রতিটি ক্লাসে বিষদ ব্যাখ্যা এবং সরাসরি প্রশ্নোত্তর সুবিধা।</p>
                    </div>
                  </div>
                  <div className="highlight-card">
                    <CheckCircle2 size={20} color="var(--primary)" />
                    <div>
                      <strong>সার্টিফিকেট ও মূল্যায়ন</strong>
                      <p>কোর্স সমাপ্তিতে মেধা মূল্যায়ন ও অফিসিয়াল সার্টিফিকেট প্রদান।</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="detail-cta-box">
                <div className="cta-info">
                  <h4>আজই ভর্তি সম্পন্ন করুন</h4>
                  <p>আমাদের এডমিশন পোর্টালে গিয়ে সরাসরি রেজিস্ট্রেশন ফর্ম পূরণ করুন।</p>
                </div>
                <a 
                  href={admissionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-large-cta"
                >
                  এখনই ভর্তি হন <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;
