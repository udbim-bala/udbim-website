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
    const handleScroll = () => {
      const recruitHero = document.querySelector('.recruit-hero');
      if (!recruitHero) return;

      const heading = recruitHero.querySelector('.recruit-heading');
      const subheading = recruitHero.querySelector('.recruit-subheading');
      const paragraph = recruitHero.querySelector('p');
      const cta = recruitHero.querySelector('.recruit-cta');

      const screenPosition = window.innerHeight / 1.3;

      if (heading && !visible.heading && heading.getBoundingClientRect().top < screenPosition) {
        setVisible(v => ({ ...v, heading: true }));
      }
      if (subheading && !visible.subheading && subheading.getBoundingClientRect().top < screenPosition) {
        setVisible(v => ({ ...v, subheading: true }));
      }
      if (paragraph && !visible.paragraph && paragraph.getBoundingClientRect().top < screenPosition) {
        setVisible(v => ({ ...v, paragraph: true }));
      }
      if (cta && !visible.cta && cta.getBoundingClientRect().top < screenPosition) {
        setVisible(v => ({ ...v, cta: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // trigger once on mount in case elements are already in view
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  const baseStyle = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.6s ease',
  };

  return (
    <section className="recruit-hero">
      <div className="recruit-container">
        <h1
          className="recruit-heading"
          style={{
            ...baseStyle,
            opacity: visible.heading ? 1 : 0,
            transform: visible.heading ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0s',
          }}
        >
          Recruitment Services for Detailing & BIM Professionals
        </h1>
        <h2
          className="recruit-subheading"
          style={{
            ...baseStyle,
            opacity: visible.subheading ? 1 : 0,
            transform: visible.subheading ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.2s',
          }}
        >
          Connecting Talent with Opportunity in the Detailing and BIM Industry
        </h2>
        <p
          style={{
            ...baseStyle,
            opacity: visible.paragraph ? 1 : 0,
            transform: visible.paragraph ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.4s',
          }}
        >
          At Universal Detailing and BIM Training Institute, we don't just train the next generation of Detailing and BIM experts — we help them find the right career opportunities. Our dedicated Recruitment Services are tailored to meet the unique needs of both job seekers and employers in the AEC (Architecture, Engineering, Construction) and Infrastructure sectors.
        </p>
        <a
          href="#about"
          className="recruit-cta"
          style={{
            color:"white",
            ...baseStyle,
            opacity: visible.cta ? 1 : 0,
            transform: visible.cta ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.6s',
          }}
        >
          Explore Our Services <FaArrowDown style={{ marginLeft: '8px',color:"white" }} />
        </a>
      </div>
    </section>
  );
};

export default RecruitHero;
