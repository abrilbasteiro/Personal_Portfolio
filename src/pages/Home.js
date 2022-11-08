import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Works from '../components/Works/Works'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Works/>
      <Contact/>
    </>
  )
}

export default Home