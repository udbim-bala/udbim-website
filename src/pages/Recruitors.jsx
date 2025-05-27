import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import RecruitHero from '../components/RecruitCom/RecruitHero';
import RecruitAbout from '../components/RecruitCom/RecruitAbout';
import RecruitServices from '../components/RecruitCom/RecruitServices';
import RecruitPricing from '../components/RecruitCom/RecruitPricing';

const Recruitors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <RecruitHero />
      <RecruitAbout />
      <RecruitServices />
      <RecruitPricing />
    </div>
  );
};

export default Recruitors;
