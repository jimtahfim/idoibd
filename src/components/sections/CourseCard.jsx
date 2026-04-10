import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, MonitorPlay, CalendarDays } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ course, isUpcoming }) => {
  return (
    <div className="course-card">
      <div className="course-thumb-wrapper">
        <img src={course.thumbnail} alt={course.title} className="course-thumb" />
        <div className="course-badges">
          {course.badges && course.badges.map((badge, idx) => (
            <span key={idx} className={`badge ${badge === 'আসন্ন' ? 'badge-warning' : 'badge-primary'}`}>
              {badge}
            </span>
          ))}
        </div>
        {isUpcoming && course.daysLeft && (
          <div className="countdown-badge">
            <CalendarDays size={14} /> আর {course.daysLeft} দিন বাকি
          </div>
        )}
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <div className="course-meta">
          <div className="meta-item">
            <User size={16} /> <span>{course.instructor}</span>
          </div>
          <div className="meta-item">
            <Clock size={16} /> <span>{course.duration}</span>
          </div>
          <div className="meta-item">
            <MonitorPlay size={16} /> <span>{course.mode}</span>
          </div>
        </div>
        
        <div className="course-footer">
          <div className="course-fee">{course.fee}</div>
          <Link to="/admission" className="btn btn-primary btn-sm">
            {isUpcoming ? 'প্রি-বুক করুন' : 'ভর্তি হোন'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
