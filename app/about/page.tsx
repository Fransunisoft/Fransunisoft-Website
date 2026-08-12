import React from 'react'
import HeroSection from '../AboutComponent/HeroSection'
import Vision from '../AboutComponent/Vision'
import CoreValue from '../AboutComponent/CoreValue'
import Founder from '../AboutComponent/Founder'
import PreFooter from '../components/layout/PreFooter'

export default function page() {
  return (
    <div>
      <HeroSection />
      <Vision />
      <CoreValue />
      <Founder />
      <PreFooter />
    </div>
  )
}
