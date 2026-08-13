import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';
import faqData from '../../data/faq.json';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section section-bg-white" id="faq">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="h2 text-dark">সাধারণ জিজ্ঞাসা (FAQ)</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            ভর্তি সংক্রান্ত বা কোর্স বিষয়ক যেকোনো প্রশ্নের উত্তর এখানে পাবেন।
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} 
                />
              </button>
              <div 
                className="faq-answer-wrapper" 
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
