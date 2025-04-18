import React from 'react'
import AboutUsHeader from '../components/AboutUs/AboutUsHeader'
import OurLocations from '../components/AboutUs/OurLocations'
import OurMission from '../components/AboutUs/OurMession'
import TestimonialSlider from '../components/AboutUs/TestimonialSlider'

export default function AboutUsPage () {
  return (
    <>
    <AboutUsHeader/>
    <OurMission/>
    <TestimonialSlider/>
    <OurLocations/>
    </>
  )
}
