import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Social Bar */}
      <div className="footer-social-bar">
        <Container>
          <Row className="align-items-center py-3">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <span className="social-cta">Join our community for updates and insights</span>
            </Col>
            <Col md={6}>
              <div className="social-icons-wrapper">
                <a href="https://www.facebook.com/share/1YaraXsN4w/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                  <FaFacebookF />
                  <span className="social-hover-text">Facebook</span>
                </a>
                <a href="https://www.instagram.com/universal_detailing_and_bim" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                  <span className="social-hover-text">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/universal-detailing-and-bim-training-institute/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                  <span className="social-hover-text">LinkedIn</span>
                </a>
                <a href="https://youtube.com/@ud-bim?si=pnWTxShEaP2AM_qZ" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
                  <FaYoutube />
                  <span className="social-hover-text">YouTube</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main-content">
        <Container>
          <Row className="py-2">
            {/* About Column */}
            <Col lg={4} md={6} className="mb-5 mb-lg-0">
              <div className="footer-brand">
                <img src={Logo} alt="UD-BIM Logo" className="footer-logo" />
                <p className="footer-about-text">
                  At UD-BIM Training Institute, we empower professionals with cutting-edge skills in Rebar Detailing, BIM, and Structural Detailing through hands-on, industry-relevant training programs.
                </p>
                <div className="trust-badges">
                  <span className="trust-badge">Industry Certified</span>
                  <span className="trust-badge">Practical Training</span>
                  <span className="trust-badge">Placement Support</span>
                </div>
              </div>
            </Col>

            {/* Quick Links Column */}
            <Col lg={2} md={6} className="mb-5 mb-md-0 second-col">
              <h5 className="footer-column-title">Quick Links</h5>
              <ul className="footer-nav-links">
                <li>
                  <Link to="/" className="footer-nav-link">
                    <FaArrowRight className="link-arrow" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs" className="footer-nav-link">
                    <FaArrowRight className="link-arrow" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-nav-link">
                    <FaArrowRight className="link-arrow" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/hiring-solutions" className="footer-nav-link">
                    <FaArrowRight className="link-arrow" />
                    Hiring Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-nav-link">
                    <FaArrowRight className="link-arrow" />
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Contact Column */}
            <Col lg={6} md={12}>
              <div className="footer-contact-wrapper">
                <h5 className="footer-column-title">Get In Touch</h5>
                <ul className="footer-contact-info">
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaPhoneAlt className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <a href="tel:+918122149339" className="contact-link">+91 81221 49339</a>
                      <div className="contact-meta">Mon-Sun, 9AM-6PM</div>
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <a href="mailto:contact@ud-bimtraining.com" className="contact-link">contact@ud-bimtraining.com</a>
                      <div className="contact-meta">Response within 24 hours</div>
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaMapMarkerAlt className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <address className="contact-address">
                        
                        2nd Floor, No:73, S. Sivan Koil St,<br />
                        Opp. to Ambiga Driving School,<br />
                        Ottagapalayam, Sector 15,<br />
                        Vadapalani, Chennai,<br />
                        Tamil Nadu – 600026

                      </address>
                      <a href="https://maps.app.goo.gl/vj6JhxZeiiq4T4gg6" target="_blank" rel="noreferrer" className="map-link">
                        View on Google Maps
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-bar">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p className="copyright-text">
                &copy; {currentYear} <strong>UD-BIM Training Institute</strong>. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;