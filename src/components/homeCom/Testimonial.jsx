import React, { useState } from 'react';
import './Testimonial.css';
import { FaWhatsapp } from 'react-icons/fa';

const testimonials = [
  {
    name: "Joseph",
    gender: "male",
    text: `The training was hands-on and industry-relevant. I gained real project exposure in BIM modeling.`,
  },
  {
    name: "Faizal",
    gender: "female",
    text: `Expert instructors and structured modules made learning easy. Now I'm confident in Detailing and BIM tools.`,
  },
  {
    name: "Nivetha",
    gender: "male",
    text: `A great place to upskill with real-world applications. I landed a job within weeks of completing the course.`,
  },
];

const getProfileImage = (gender) => {
  return gender === 'male'
    ? 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
    : 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png';
};

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/yourphonenumber', '_blank');
  };

  return (
    <section className="testimonial-container">
      {/* WhatsApp Consultation Banner */}
      <div className="whatsapp-banner">
        <div className="whatsapp-content">
          <div className="whatsapp-text">
            <h3>Free WhatsApp Consultation</h3>
            <p>Chat instantly with our experts - no waiting time!</p>
          </div>
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="whatsapp-icon" />
            Start Chat
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-wrapper">
        <h2 className="testimonial-title">What our happy user says!</h2>
        <p className="testimonial-text">"{testimonials[current].text}"</p>

        <div className="testimonial-controls">
          <button className="arrow-btn" onClick={prevTestimonial}>‹</button>
          {testimonials.map((t, index) => (
            <img
              key={index}
              src={getProfileImage(t.gender)}
              alt={t.name}
              className={`testimonial-avatar ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
          <button className="arrow-btn" onClick={nextTestimonial}>›</button>
        </div>

        <p className="testimonial-name">{testimonials[current].name}</p>
      </div>
    </section>
  );
};

export default Testimonial;