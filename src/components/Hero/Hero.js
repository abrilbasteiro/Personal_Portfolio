import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero' id='hero'>
        <div className='hero'>
          <div className='welcome'>
            <p className='heroTitle'>&#45; Welcome! &#45;</p>
            <p className='closeBtn'>X</p>
          </div>
            {/* <p className='heroTitle'>&#45; Welcome! &#45;</p>
            <p className='closeBtn'>X</p> */}
          <h1 className='heroName'>I am Abril</h1>
          <h2 className='heroSubtitle'>frontend developer</h2>
        </div>
    </section>
  )
}

export default Hero