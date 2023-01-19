import React from 'react'
import './Footer.scss'
import { IoMailOutline, IoLogoGithub } from 'react-icons/io5'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
// import { IoLogoWhatsapp } from 'react-icons/io'
import  WhatsappIcon  from '../../images/whatsapp.png'
const Footer = () => {
  return (
    <footer className='footerContainer'>
            <p>Abril Basteiro - 2023</p>
            <div className="contactIcons">
                <a href="https://www.linkedin.com/in/abrilbasteiro/" target="_blank">
                    <FaLinkedinIn className='contactIcon'/>
                </a>
                <a href="mailto:basteiroabril@gmail.com" target="_blank">
                    <IoMailOutline className='contactIcon'/>
                </a>
                <a href="https://wa.me/+541136636476/?text=Hola+Abril!+Trabajemos+juntos!+:)"  target="_blank">
                    <FaWhatsapp className='contactIcon'/>
                </a>
                <a href="https://github.com/abrilbasteiro" target="_blank">
                    <IoLogoGithub className='contactIcon'/>
                </a>
            </div>
            <div className="whatsappBtn">
                <a href="https://wa.me/+541136636476/?text=Hola+Abril!+Trabajemos+juntos!+:)"  target="_blank">
                    <img src={WhatsappIcon} alt='whatsapp icon' className='whatsappIcon'/>
                </a>
            </div>
    </footer>
  )
}

export default Footer