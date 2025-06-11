import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './SerContact.css';

const SerContact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleStartProjectClick = () => {
    const phone = '916369303038';
    const message = encodeURIComponent("Hello, I'm interested in starting a project with your team. Please get in touch!");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_47p0c9i',      // Your EmailJS service ID
        'template_mgjniip',     // Your EmailJS template ID
        form.current,
        'F0dmrBCpn-7rchfY6'     // Your EmailJS public key
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ser-contact" id="contact">
      {/* Top Banner */}
      <div className="contact-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h2>Let's build something together</h2>
            <p>Ready to start your project? We're here to help.</p>
          </div>
          <button className="banner-btn" onClick={handleStartProjectClick}>
            Start Project <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid px-5">
        <div className="contact-grid">
          
          {/* Contact Info */}
          <div className="contact-card info-card">
            <div className="card-header">
              <h3>Contact Information</h3>
              <p>Get in touch with us directly</p>
            </div>
            <div className="info-items">
              <InfoItem
                icon={<FaEnvelope />}
                title="Email"
                value="Bala.k@sqdvircon.com"
                link="mailto:Bala.k@sqdvircon.com"
              />
              <InfoItem
                icon={<FaPhone />}
                title="Phone"
                value="+91 81221 49339"
                link="tel:+918122149339"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card form-card">
            <div className="card-header">
              <h3>Send Us a Message</h3>
              <p>We typically respond within 24 hours</p>
            </div>

            {submitStatus && (
              <div className={`form-status ${submitStatus}`}>
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'Something went wrong. Please try again.'}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <InputField id="name" name="user_name" label="Your Name" placeholder="Your Name" required />
                <InputField id="email" name="user_email" label="Email Address" type="email" placeholder="Your Email" required />
              </div>
              <InputField id="subject" name="subject" label="Subject" placeholder="Enter Your Subject" required />
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-footer">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  <FaPaperPlane className="btn-icon" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="form-note">We respect your privacy. Your information will not be shared.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Components

const InfoItem = ({ icon, title, value, link }) => (
  <div className="info-item">
    <div className="info-icon">{icon}</div>
    <div className="info-text">
      <h4>{title}</h4>
      <a href={link}>{value}</a>
    </div>
  </div>
);

const InputField = ({ id, name, label, type = 'text', placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={name} placeholder={placeholder} required={required} />
  </div>
);

export default SerContact;
