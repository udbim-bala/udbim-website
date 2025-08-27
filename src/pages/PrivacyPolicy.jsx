// src/pages/PrivacyPolicy/PrivacyPolicy.jsx
import React, { useState } from 'react';
import '../css/PrivacyPolicy.css'
import { ChevronDown, ChevronUp, Mail, Shield, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isNavSticky, setIsNavSticky] = useState(false);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
      // Scroll to section if it's being opened
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Sticky navigation effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsNavSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const policySections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Shield size={18} />,
      content: (
        <>
          <p>
            Welcome to UD BIM Training Institute (ud-bimtraining.com). This Privacy Policy applies only to our online activities and explains how we collect, use, and safeguard your personal data. It does not cover offline interactions or other websites.
          </p>
          <h3>Who We Are</h3>
          <p>
            UD BIM Training Institute is the data controller responsible for your personal information. For privacy-related concerns, contact us at:{' '}
            <a href="mailto:contact@ud-bimtraining.com" className="contact-link">
              <Mail size={14} /> contact@ud-bimtraining.com
            </a>.
          </p>
        </>
      )
    },
    {
      id: 'data-collection',
      title: 'Data We Collect',
      icon: <Lock size={18} />,
      content: (
        <>
          <ul>
            <li><strong>Contact details:</strong> name, email, phone, organization.</li>
            <li><strong>Professional/CV information:</strong> qualifications, resumes (if submitted).</li>
            <li><strong>Technical information:</strong> IP address, device/browser type, cookies, analytics.</li>
          </ul>
          <h3>How We Collect It</h3>
          <ul>
            <li>When you submit forms (e.g., enrollments, inquiries).</li>
            <li>Automatically via website analytics and cookies.</li>
            <li>From third-party tools (e.g., payment gateways, email services).</li>
          </ul>
        </>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <Shield size={18} />,
      content: (
        <ul>
          <li>To provide training services and related communications.</li>
          <li>To improve our website and offerings.</li>
          <li>For marketing (only with your explicit consent, and you may withdraw anytime).</li>
        </ul>
      )
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking',
      icon: <Lock size={18} />,
      content: (
        <>
          <p>We use cookies and tracking technologies to enhance your experience. You can manage or disable cookies via your browser settings.</p>
          <h3>Sharing Your Data</h3>
          <ul>
            <li>With trusted service providers (e.g., email, hosting, payment processors).</li>
            <li>When required by law or compliance (e.g., court orders).</li>
          </ul>
        </>
      )
    },
    {
      id: 'security-rights',
      title: 'Security & Your Rights',
      icon: <Shield size={18} />,
      content: (
        <>
          <h3>International Transfers</h3>
          <p>If your data is processed or stored outside India, we ensure it is handled in compliance with applicable laws.</p>
          
          <h3>Data Security & Privacy by Design</h3>
          <p>We implement industry-standard security measures to protect your data. Privacy is embedded into the design of our systems and services.</p>
          
          <h3>Data Retention</h3>
          <p>We retain personal data only as long as necessary to fulfil our services, legal obligations, or legitimate business purposes.</p>
          
          <h3>Your Rights</h3>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Correct or update inaccuracies.</li>
            <li>Delete your data (with exceptions as required by law).</li>
            <li>Withdraw consent or object to processing.</li>
            <li>Portability or restrict processing.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{' '}
            <a href="mailto:contact@ud-bimtraining.com" className="contact-link">
              <Mail size={14} /> contact@ud-bimtraining.com
            </a>.
          </p>
        </>
      )
    },
    {
      id: 'additional-info',
      title: 'Additional Information',
      icon: <Shield size={18} />,
      content: (
        <>
          <h3>Children's Privacy</h3>
          <p>Our services are not intended for children under 13. We do not knowingly collect data from minors.</p>
          
          <h3>Changes to This Policy</h3>
          <p>We may update this Privacy Policy as needed. Updates will include a revised "Effective Date."</p>
          
          <h3>Contact Us</h3>
          <p>
            For questions or privacy requests, email us at{' '}
            <a href="mailto:contact@ud-bimtraining.com" className="contact-link">
              <Mail size={14} /> contact@ud-bimtraining.com
            </a>.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <div className="header-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-intro">
            At UD BIM Training Institute, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="last-updated">
            <strong>Last Updated:</strong> August 25, 2025
          </p>
        </div>
      </header>

      <nav className={`privacy-nav ${isNavSticky ? 'sticky' : ''}`}>
        <div className="nav-container">
          <h2>Quick Navigation</h2>
          <ul>
            {policySections.map((section) => (
              <li key={section.id}>
                <button 
                  onClick={() => scrollToSection(section.id)}
                  className={activeSection === section.id ? 'active' : ''}
                >
                  {section.icon}
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="privacy-content">
        {policySections.map((section) => (
          <section 
            key={section.id}
            id={section.id}
            className={`policy-section ${activeSection === section.id ? 'active' : ''}`}
          >
            <h2 onClick={() => toggleSection(section.id)}>
              <span className="section-icon">{section.icon}</span>
              {section.title}
              <span className="toggle-icon">
                {activeSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </h2>
            <div className="section-content">
              {section.content}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default PrivacyPolicy;