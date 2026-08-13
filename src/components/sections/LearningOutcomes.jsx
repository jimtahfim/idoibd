import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './LearningOutcomes.css';

const outcomes = [
  "অভিজ্ঞ ওস্তাদদের দ্বারা সরাসরি লাইভ ক্লাস",
  "প্রতিটি ক্লাসের রেকর্ডিং সুবিধা",
  "সহজবোধ্য লেকচার শিট ও নোট প্রদান",
  "কোর্স শেষে মূল্যায়ন পরীক্ষা",
  "কৃতকার্যদের জন্য ডিজিটাল ও প্রিন্টেড সার্টিফিকেট",
  "আজীবন কমিউনিটি সাপোর্ট",
  "বিশেষ প্রশ্নোত্তর সেশন",
  "আর্থিকভাবে অসচ্ছলদের জন্য বিশেষ ছাড়"
];

const LearningOutcomes = () => {
  return (
    <section className="section section-bg-mint">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 items-center outcomes-grid">
          <div className="outcomes-visual">
            <div className="visual-card glass">
              <img 
                src="/images/outcomes_img_1775794246035.png" 
                alt="Learning Outcomes" 
                className="outcomes-img"
              />
              <div className="experience-badge bg-white shadow-lg">
                <span className="badge-year">৫+</span>
                <span className="badge-text text-muted">বছরের অভিজ্ঞতা</span>
              </div>
            </div>
          </div>
          
          <div className="outcomes-content">
            <h2 className="h2 text-dark mb-4">আমাদের কোর্স থেকে আপনি যা যা পাচ্ছেন</h2>
            <p className="p-large mb-6">
              আমরা শুধু গতানুগতিক ক্লাসই নিই না, বরং শিক্ষার্থীদের সার্বিক তত্ত্বাবধান ও উন্নতির দিকে বিশেষ নজর দিই।
            </p>
            
            <ul className="outcomes-list">
              {outcomes.map((outcome, idx) => (
                <li key={idx} className="outcome-item">
                  <CheckCircle2 size={24} className="outcome-icon" />
                  <span className="outcome-text">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
