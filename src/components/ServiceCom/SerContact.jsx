import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { MdBusiness, MdSchedule } from 'react-icons/md';
import './SerContact.css';

const SerContact = () => {
  return (
    <section className="ser-contact" id="contact">
      <div className="contact-wave"></div>
      <div className="container-fluid px-5">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle" style={{color:"black"}}>We're ready to bring your project to life. Reach out today!</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-card info-card">
            <div className="card-header">
              <h3>Contact Information</h3>
              <p>Fill out the form or contact us directly</p>
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
                <div className="info-icon"><MdBusiness /></div>
                <div className="info-text">
                  <h4>Our Companies</h4>
                  <div className="company-links">
                    <a href="https://sqdvircon.com" target="_blank" rel="noopener noreferrer">Sqdvircon</a>
                    <a href="https://www.proultimaengineering.com" target="_blank" rel="noopener noreferrer">Proultima Engineering</a>
                    <a href="https://www.rebardnd.com" target="_blank" rel="noopener noreferrer">Rebar DND</a>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MdSchedule /></div>
                <div className="info-text">
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 9am - 6pm</p>
                  <p>Saturday: 10am - 2pm</p>
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

          {/* Locations */}
          <div className="contact-card location-card">
            <div className="card-header">
              <h3>Our Locations</h3>
              <p>Visit us or work with us remotely</p>
            </div>
            <div className="location-map">
              <FaMapMarkerAlt className="map-icon" />
               <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.5057276243356!2d80.21085479999999!3d13.04697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e814288e41%3A0x378986be92e74870!2sLearn%20Bench%20India-%20Best%20project%20Center%20in%20chennai!5e1!3m2!1sen!2sin!4v1748330727010!5m2!1sen!2sin" 
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="location-info">
              <div className="location-item">
                <h4 className='fw-bold'>Headquarters</h4>
                <p>73, 2nd Floor, South Sivan Koil St,</p>
                <p>Opp. to Ambiga Driving School,</p>
                <p>Vadapalani, Chennai,</p>
                <p>Tamil Nadu - 600026</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SerContact;
