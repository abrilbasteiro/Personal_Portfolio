import React from 'react';
import './Hero.scss';
import { GiArrowCursor } from 'react-icons/gi'

const Hero = () => {
  return (
    <section className='heroSection' id='hero'>
          <div className='welcome'>
            <p className='heroTitle'>&#45; Welcome! &#45;</p>
            <p className='closeBtn'>X</p>
            <GiArrowCursor className="mouseCursor"/>
          </div>
          <h1 className='heroName'>I am Abril</h1>
          <h2 className='heroSubtitle'>frontend developer</h2>
    </section>
  )
}

export default Hero