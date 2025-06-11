import React from 'react';
import AboutIntro from '../components/aboutCom/AboutIntro';
import MissionVision from '../components/aboutCom/MissionVision';
import TrainingAreas from '../components/aboutCom/TrainingAreas';
import Achievements from '../components/aboutCom/Achievements';
import Team from '../components/aboutCom/Team';
import Difference from '../components/aboutCom/Difference';

const AboutUs = () => {
  return (
    <div className="mx-0 px-0">
      <AboutIntro />
      <MissionVision />
      <TrainingAreas />
      <Achievements />
      <Team />
      <Difference />
    </div>
  );
};

export default AboutUs;
