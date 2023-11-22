import Marquee from '@/components/elements/Marquee'
import React from 'react'

const AboutLayout = ({ children }) => {
  return (
    <main>
      <Marquee />
      {children}
    </main>
  )
}

export default AboutLayout
