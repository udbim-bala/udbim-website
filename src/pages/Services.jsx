import React from 'react'
import '../css/Services.css'
import SerHero from '../components/ServiceCom/SerHero'
import SerServices from '../components/ServiceCom/SerServices'
import SerWhyChoose from '../components/ServiceCom/SerWhyChoose'
import SerContact from '../components/ServiceCom/SerContact'

const Services = () => {
  return (
    <div>
      <SerHero/>
      <SerServices/>
      <SerWhyChoose/>
      <SerContact/>
    </div>
  )
}

export default Services
