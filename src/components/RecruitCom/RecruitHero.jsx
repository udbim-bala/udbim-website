import { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import '../RecruitCom/Recruitment.css';

const RecruitHero = () => {
  const [visible, setVisible] = useState({
    heading: false,
    subheading: false,
    paragraph: false,
    cta: false,
  });

  useEffect(() => {
    const recruitHero = document.querySelector('.recruit-hero');
    if (!recruitHero) return;

    const screenPosition = window.innerHeight / 1.3;

    const elements = [
      { class: '.recruit-heading', key: 'heading' },
      { class: '.recruit-subheading', key: 'subheading' },
      { class: 'p', key: 'paragraph' },
      { class: '.recruit-cta', key: 'cta' },
    ];

    const handleScroll = () => {
      elements.forEach(({ class: selector, key }) => {
        const element = recruitHero.querySelector(selector);
        if (element && !visible[key] && element.getBoundingClientRect().top < screenPosition) {
          setVisible(prev => ({ ...prev, [key]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  const animateStyle = (isVisible, delay = '0s') => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s ease`,
    transitionDelay: delay,
  });

  return (
    <section className="recruit-hero">
      <div className="recruit-container">
        <h1 className="recruit-heading" style={animateStyle(visible.heading, '0s')}>
          Recruitment Services for Detailing & BIM Professionals
        </h1>

        <h2 className="recruit-subheading" style={animateStyle(visible.subheading, '0.2s')}>
          Connecting Talent with Opportunity in the Detailing and BIM Industry
        </h2>

        <p style={animateStyle(visible.paragraph, '0.4s')}>
          At Universal Detailing and BIM Training Institute, we don't just train the next generation of Detailing and BIM experts — we help them find the right career opportunities. Our dedicated Recruitment Services are tailored to meet the unique needs of both job seekers and employers in the AEC (Architecture, Engineering, Construction) and Infrastructure sectors.
        </p>

        <a
          href="#about"
          className="recruit-cta"
          style={{
            ...animateStyle(visible.cta, '0.6s'),
            color: 'white',
          }}
        >
          Explore Our Services <FaArrowDown style={{ marginLeft: '8px', color: 'white' }} />
        </a>
      </div>
    </section>
  );
};

export default RecruitHero;
