import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaPaperPlane
} from 'react-icons/fa';
import '../ContactCom/ConCom.css';

const ConCom = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_47p0c9i',
      'template_vbu6hoe',
      formRef.current,
      'F0dmrBCpn-7rchfY6'
    ).then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }).catch(() => {
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.</p>
      </header>

      <div className="contact-container">
        <section className="contact-box">
          <aside className="contact-info">
            <h3>Contact Information</h3>
            <p className="info-description">
              Fill out the form or contact us through other channels listed below.
            </p>

            <InfoItem
              icon={<FaEnvelope />}
              title="Email Us"
              details={["contact@ud-bimtraining.com"]}
            />

            <InfoItem
              icon={<FaPhone />}
              title="Call Us"
              details={["+91 81221 49339"]}
            />

            <InfoItem
              icon={<FaMapMarkerAlt />}
              title="Visit Us"
              details={[
                "73, 2nd Floor, South Sivan Koil St,",
                "Opp. to Ambiga Driving School,",
                "Vadapalani, Chennai,",
                "Tamil Nadu - 600026"
              ]}
            />

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </aside>

          <article className="contact-form">
            <h3>Send Us a Message</h3>

            {submitStatus === 'success' && (
              <Alert type="success" message="Form Submitted Successfully!" />
            )}

            {submitStatus === 'error' && (
              <Alert type="error" message="Something went wrong. Please try again." />
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <InputField
                  id="name"
                  label="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  id="email"
                  label="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <InputField
                id="subject"
                label="Subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="send-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <FaPaperPlane style={{ marginLeft: '8px' }} />
                  </>
                )}
              </button>
            </form>
          </article>
        </section>

        <div className="map-container">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.505612568075!2d80.2108769!3d13.046977700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526712cb66da37%3A0xbbdc7fa77a9bc9be!2sUniversal%20Detailing%20and%20BIM%20Training%20Institute!5e1!3m2!1sen!2sin!4v1749882854072!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const InfoItem = ({ icon, title, details }) => (
  <div className="info-item">
    <div className="info-icon">
      {icon}
    </div>
    <div className="info-content">
      <h4>{title}</h4>
      {details.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  </div>
);

const InputField = ({ id, label, type, value, onChange }) => (
  <div className="input-group">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={`Enter your ${label.toLowerCase()}`}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const Alert = ({ type, message }) => (
  <div className={`alert ${type}`}>
    {type === 'success' ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l-4-4 1.414-1.414L11 13.172l5.293-5.293 1.414 1.414L11 16z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l-4-4 1.414-1.414L11 13.172l5.293-5.293 1.414 1.414L11 16z" />
      </svg>
    )}
    <p>{message}</p>
  </div>
);

export default ConCom;




