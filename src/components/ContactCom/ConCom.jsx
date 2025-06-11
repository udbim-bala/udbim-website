import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
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

    console.log("Sending email with data:", formData);
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
              icon="mail"
              title="Email Us"
              details={["contact@ud-bimtraining.com"]}
            />

            <InfoItem
              icon="phone"
              title="Call Us"
              details={["+91 81221 49339"]}
            />

            <InfoItem
              icon="location"
              title="Visit Us"
              details={[
                "73, 2nd Floor, South Sivan Koil St,",
                "Opp. to Ambiga Driving School,",
                "Vadapalani, Chennai,",
                "Tamil Nadu - 600026"
              ]}
            />

            <div className="social-links">
              {['Facebook', 'Instagram', 'LinkedIn'].map((label, i) => (
                <a key={i} href="#" aria-label={label}>
                  {/* Replace this with real icons or imported ones */}
                  <span className="social-icon">{label[0]}</span>
                </a>
              ))}
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ marginLeft: '8px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </article>
        </section>

        <div className="map-container">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.5057276243356!2d80.21085479999999!3d13.04697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e814288e41%3A0x378986be92e74870!2sLearn%20Bench%20India-%20Best%20project%20Center%20in%20chennai!5e1!3m2!1sen!2sin!4v1748330727010!5m2!1sen!2sin"
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

// Reusable InfoItem Component
const InfoItem = ({ icon, title, details }) => (
  <div className="info-item">
    <div className="info-icon">
      {/* Replace this SVG with actual icons depending on `icon` prop */}
      <span className="icon-placeholder">{icon}</span>
    </div>
    <div>
      <h4>{title}</h4>
      {details.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  </div>
);

// Reusable InputField Component
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

// Reusable Alert Component
const Alert = ({ type, message }) => (
  <div className={`alert ${type}`}>
    {type === 'success' && (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l-4-4 1.414-1.414L11 13.172l5.293-5.293 1.414 1.414L11 16z" />
      </svg>
    )}
    <p>{message}</p>
  </div>
);

export default ConCom;
