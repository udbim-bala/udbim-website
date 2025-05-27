import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Ethan Miller",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:  `This service has changed how I organize my tasks and projects. It's sleek, fast, and very easy to use. 
    I’ve recommended it to all my teammates.`,
  },
  {
    name: "Sarah Kim",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `This service has changed how I organize my tasks and projects. It's sleek, fast, and very easy to use. 
    I’ve recommended it to all my teammates.`,
  },
  {
    name: "David Lee",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text:  `This service has changed how I organize my tasks and projects. It's sleek, fast, and very easy to use. 
    I’ve recommended it to all my teammates.`,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-wrapper">
      <h2 className="testimonial-title">What our happy user says!</h2>
      <p className="testimonial-text">"{testimonials[current].text}"</p>

      <div className="testimonial-controls">
        <button className="arrow-btn" onClick={prevTestimonial}>‹</button>
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`testimonial-avatar ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
        <button className="arrow-btn" onClick={nextTestimonial}>›</button>
      </div>

      <p className="testimonial-name">{testimonials[current].name}</p>
    </section>
  );
};

export default Testimonial;
