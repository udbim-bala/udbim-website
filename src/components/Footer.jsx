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
  FaGlobe,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Social Bar */}
      <div className="footer-social">
        <Container>
          <Row className="align-items-center py-3">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <span className="social-text">Connect with us on social media:</span>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="https://www.facebook.com/share/1YaraXsN4w/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://www.instagram.com/universal_detailing_and_bim" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/universal-detailing-and-bim-training-institute/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://youtube.com/@ud-bim?si=pnWTxShEaP2AM_qZ" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Content */}
      <div className="footer-main">
        <Container>
          <Row className="py-4">
            {/* About */}
            <Col lg={4} md={6} className="mb-4 text-center text-md-start">
              <img src={Logo} alt="UD-BIM Logo" className="footer-logo mb-2" />
              <p className="footer-text">
                At UD-BIM Training Institute, it's never too late to learn or change your field. Whether you're starting fresh or upgrading your skills, we empower every learner with hands-on training in Rebar Detailing, BIM, and Structural Detailing.
              </p>
            </Col>

            {/* Quick Links */}
            <Col lg={3} md={6} className="mb-4 text-center text-md-start">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/aboutUs" className="footer-link">About Us</Link></li>
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="/hiring-solutions" className="footer-link">Hiring Solutions</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={5} md={12} className="text-center text-md-start">
              <h5 className="footer-heading">Contact Us</h5>
              <ul className="footer-contact list-unstyled">
                <li className="d-flex mb-2 align-items-start">
                  <span className="contact-icon me-2 mt-1"><FaPhoneAlt /></span>
                  <div>
                    <a href="tel:+918122149339" className="footer-link contact-link">+91 81221 49339</a>
                    <div className="contact-hours small">Mon-Sun, 9AM-6PM</div>
                  </div>
                </li>
                <li className="d-flex mb-2 align-items-start">
                  <span className="contact-icon me-2 mt-1"><FaEnvelope /></span>
                  <a href="mailto:contact@ud-bimtraining.com" className="footer-link contact-link">contact@ud-bimtraining.com</a>
                </li>
                <li className="d-flex align-items-start">
                  <span className="contact-icon me-2 mt-1"><FaMapMarkerAlt /></span>
                  <address className="footer-address">
                    73, 2nd Floor, South Sivan Koil St,<br />
                    Opp. to Ambiga Driving School,<br />
                    Vadapalani, Chennai,<br />
                    Tamil Nadu - 600026
                  </address>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom py-2">
        <Container>
          <p className="text-center copyright mb-0">
            &copy; {currentYear} UD-BIM Training Institute. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
