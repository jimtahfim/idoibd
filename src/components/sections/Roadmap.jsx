import React from 'react';
import { Search, ListChecks, FileInput, Laptop, CheckSquare, Award } from 'lucide-react';
import './Roadmap.css';

const steps = [
  { 
    id: 1, 
    title: 'কোর্স নির্বাচন', 
    desc: 'আমাদের বিস্তৃত কোর্স তালিকা থেকে আপনার পছন্দের ও প্রয়োজনীয় কোর্সটি বেছে নিন।',
    icon: <Search size={24} /> 
  },
  { 
    id: 2, 
    title: 'সিলেবাস দেখা', 
    desc: 'কোর্সের বিস্তারিত কারিকুলাম, ক্লাস শিডিউল এবং আউটলাইন পড়ে নিশ্চিত হোন।',
    icon: <ListChecks size={24} /> 
  },
  { 
    id: 3, 
    title: 'ভর্তি সম্পন্ন', 
    desc: 'ওয়েবসাইটে ফরম পূরণ ও ফি প্রদানের মাধ্যমে খুব সহজেই রেজিস্ট্রেশন সম্পন্ন করুন।',
    icon: <FileInput size={24} /> 
  },
  { 
    id: 4, 
    title: 'ক্লাস শুরু', 
    desc: 'ভর্তি ভেরিফাই হওয়ার পর ডেডিকেটেড গ্রুপে যুক্ত হয়ে নির্দিষ্ট সময়ে লাইভ ক্লাস শুরু করুন।',
    icon: <Laptop size={24} /> 
  },
  { 
    id: 5, 
    title: 'মূল্যায়ন', 
    desc: 'নিয়মিত অ্যাসাইনমেন্ট ও কুইজের মাধ্যমে নিজের অগ্রগতি যাচাই করুন।',
    icon: <CheckSquare size={24} /> 
  },
  { 
    id: 6, 
    title: 'সার্টিফিকেট অর্জন', 
    desc: 'সাফল্যের সাথে কোর্স সম্পন্ন করে আপনার যোগ্যতা স্বরূপ অর্জন করুন ভেরিফায়েড সার্টিফিকেট।',
    icon: <Award size={24} /> 
  }
];

const Roadmap = () => {
  const toBanglaDigit = (num) => num.toString().replace(/[0-9]/g, d => "০১২৩৪৫৬৭৮৯"[d]);

  return (
    <section className="section section-bg-mint" id="roadmap">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="h2 text-dark">আমাদের কোর্স করার ধাপসমূহ</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            খুব সহজেই ভর্তি হয়ে শুরু করুন আপনার ইসলামি জ্ঞান অর্জনের যাত্রা।
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-center-line"></div>
          {steps.map((step, idx) => (
            <div key={step.id} className={`timeline-item ${idx % 2 === 0 ? 'item-left' : 'item-right'}`}>
              <div className="timeline-dot-wrapper">
                <div className="timeline-pulse"></div>
                <div className="timeline-dot">
                  {step.icon}
                </div>
              </div>
              <div className="timeline-content glass hover-lift">
                <div className="step-badge">ধাপ {toBanglaDigit('0' + step.id)}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Roadmap;
