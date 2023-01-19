import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../sections/HeroSection/Hero'
import About from '../sections/AboutSection/About'
import Works from '../sections/WorksSection/Works'
import Contact from '../sections/ContactSection/Contact'
import Footer from '../components/Footer/Footer'
import Skills from '../sections/SkillsSection/Skills'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home