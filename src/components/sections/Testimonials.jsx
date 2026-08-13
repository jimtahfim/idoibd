import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';
import testimonialsData from '../../data/testimonials.json';

const Testimonials = () => {
  return (
    <section className="section section-bg-white" id="testimonials">
      <div className="container overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="h2 text-dark">শিক্ষার্থীদের মতামত</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            আমাদের কোর্স সম্পর্কে শিক্ষার্থীদের অভিজ্ঞতা এবং তাদের সফলতার গল্পগুলো জানুন।
          </p>
        </div>

        <div className="testimonials-slider-container">
          <div className="testimonials-track">
            {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
              <div key={`${testimonial.id}-${idx}`} className="testimonial-card">
                <Quote size={40} className="quote-icon" />
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.feedback}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-course">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
