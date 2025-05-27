import React from 'react'
import '../css/AboutUs.css'
import MissionVision from '../components/aboutCom/MissionVision'
import TrainingAreas from '../components/aboutCom/TrainingAreas'
import Achievements from '../components/aboutCom/Achievements'
import Team from '../components/aboutCom/Team'
import Difference from '../components/aboutCom/Difference'
import CallToAction from '../components/aboutCom/CallToAction'
import AboutIntro from '../components/aboutCom/AboutIntro'

const AboutUs = () => {
  return (
    <div className='mx-0 px-0'>
      <AboutIntro/>
      <MissionVision />
      <TrainingAreas />
      <Achievements />
      <Team />
      <Difference />
      {/* <CallToAction /> */}
    </div>
  )
}

export default AboutUs
