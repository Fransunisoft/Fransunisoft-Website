import React from 'react'
import HeroSection from '../AboutComponent/HeroSection'
import Vision from '../AboutComponent/Vision'
import CoreValue from '../AboutComponent/CoreValue'
import Founder from '../AboutComponent/Founder'
import PreFooter from '../components/layout/PreFooter'
import styles from '../AboutComponent/AboutMobile.module.css'

export default function page() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <Vision />
      <CoreValue />
      <Founder />
      <div className={styles.preFooter}><PreFooter /></div>
    </main>
  )
}
