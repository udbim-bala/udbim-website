import React from 'react'
import HeroSection from '../components/homeCom/HeroSection'
import PopularCourses from '../components/homeCom/PopularCourses'
import TestimonialSection from '../components/homeCom/Testimonial'
import Placement from '../components/homeCom/Placement'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <PopularCourses/>
      <Placement/>
      <TestimonialSection/>
      
    </div>
  )
}

export default Home
