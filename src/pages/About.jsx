import React from 'react'
import AboutHero from '../sections/about/AboutHero'
import Mission from '../sections/about/Mission'
import Vision from '../sections/about/Vision'
import Story from '../sections/about/Story'
import OurFounder from '../sections/about/OurFounder'
import Team from '../sections/about/Team'
import Testimonials from '../sections/home/Testimonials'

function About() {
  return (
    <div>
      <AboutHero />
      <Mission />
      <Vision />
      <Story />
      <OurFounder />
      <Team />
      <Testimonials/>
    </div>
  )
}

export default About