import React from 'react'
import { FeaturesSection } from '../components/container/services/FeaturesSection'
import { HeroSection } from '../components/container/services/HeroSection'
import { CTASection } from '../components/container/services/CTASection'
import "../services.css";

export default function ServicesPage() {
  return (
    <div>
        <HeroSection/>
      <FeaturesSection/>
      <CTASection/>
    </div>
  )
}
