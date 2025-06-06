import React from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import './SerContact.css';

const SerContact = () => {
  return (
    <section className="ser-contact" id="contact">
      {/* Top Banner */}
      <div className="contact-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h2>Let's build something together</h2>
            <p>Ready to start your project? We're here to help.</p>
          </div>
          <button className="banner-btn">
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
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div className="info-text">
                  <h4>Email</h4>
                  <a href="mailto:Bala.k@sqdvircon.com">Bala.k@sqdvircon.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaPhone /></div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+91 81221 49339</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-card form-card">
            <div className="card-header">
              <h3>Send Us a Message</h3>
              <p>We typically respond within 24 hours</p>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter Your Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell us about your project..." rows="5" required></textarea>
              </div>
              <div className="form-footer">
                <button type="submit" className="submit-btn">
                  <FaPaperPlane className="btn-icon" />
                  Send Message
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

export default SerContact;