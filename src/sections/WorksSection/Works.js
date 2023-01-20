import React from 'react'
import './Works.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const Works = () => {
  return (
    <section className='works d-flex justify-content-center align-items-center' id='works'>
      <h1 className='worksTitle'>These are some of my proyects</h1>
      <Swiper className="worksContainer" 
        modules={[EffectCoverflow, Pagination, Autoplay]}
        spaceBetween={-30}
        slidesPerView={3}
        grabCursor={true}
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 10,
          depth: 500,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        >
        <SwiperSlide className='worksSlide'>
          <a href="https://codepen.io/abrilbasteiro/pen/wvdEXQw" target="_blank" className="card worksCard w-100 shadow-1-strong mb-4">
            <img className="card-img-top worksImg" src="https://assets.codepen.io/6686467/internal/screenshots/pens/wvdEXQw.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1628126281&width=960" alt="Card image cap"/>
            <div className='cardCaption'>
              <p>I used the flexbox layout module to design flexible responsive layout structure without using float or positioning</p>
            </div>
            <div className="card-body">
              <p className="card-text">FlexBox</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className='worksSlide'>
            <a href="https://codepen.io/abrilbasteiro/details/gORONRy" target="_blank" className="card worksCard w-100 shadow-1-strong mb-4">
              <img className="card-img-top worksImg" src="https://assets.codepen.io/6686467/internal/screenshots/pens/gORONRy.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1629821506&width=960" alt="Card image cap"/>
              <div className='cardCaption'>
                <p>Full responsive proyect made with HTML5 and CSS3 technology. It also includes a PHP file that allows the users to send us a message through a contact form</p>
              </div>
              <div className="card-body">
                <p className="card-text">Omnifood Responsive Web</p>
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className='worksSlide'>
            <a href="https://codepen.io/abrilbasteiro/pen/qBjBmmq" target="_blank" className="card worksCard w-100 shadow-1-strong mb-4">
              <img className="card-img-top worksImg" src="https://assets.codepen.io/6686467/internal/screenshots/pens/qBjBmmq.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1629746811&width=960" alt="Card image cap"/>
              <div className='cardCaption'>
                <p>Made using HTML and CSS. I used many input variants such as "text area", "email", "number", "radio", "checkbox" and "submit", as well as the "select" element</p>
              </div>
              <div className="card-body">
                <p className="card-text">Survey Form</p>
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className='worksSlide'>
            <a href="https://codepen.io/abrilbasteiro/pen/VwWwbpW" target="_blank" className="card worksCard w-100 shadow-1-strong mb-4">
              <img className="card-img-top worksImg" src="https://assets.codepen.io/6686467/internal/screenshots/pens/VwWwbpW.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1629746672&width=960" alt="Card image cap"/>
              <div className='cardCaption'>
                <ul>
                  <li>&#45; Fixed nav-bar</li>
                  <li>&#45; Email form</li>
                  <li>&#45; Iframe YouTube video</li>
                  <li>&#45; Product section made <br/> with flexbox</li>
                  <li>&#45; Footer</li>
                </ul>
              </div>
              <div className="card-body">
                <p className="card-text">Pruduct Landing Page</p>
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className='worksSlide'>
            <a href="https://codepen.io/abrilbasteiro/pen/QWgWvGz" target="_blank" className="card worksCard w-100 shadow-1-strong mb-4">
              <img className="card-img-top worksImg" src="https://assets.codepen.io/6686467/internal/screenshots/pens/QWgWvGz.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1629746485&width=960" alt="Card image cap"/>
              <div className='cardCaption'>
                <p>Basic Index Page with HTML5 and a little bit of CSS3</p>
              </div>
              <div className="card-body">
                <p className="card-text">Tribute Page</p>
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className='worksSlide'>
            <a href="https://codepen.io/abrilbasteiro/pen/RwgwVKj" target="_blank" className="card worksCard w-100 shadow-1-strong mb-4">
              <img className="card-img-top worksImg" src="https://assets.codepen.io/6686467/internal/screenshots/pens/RwgwVKj.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1629746537&width=960" alt="Card image cap"/>
              <div className='cardCaption'>
                <p>Website where you can find documentation on how JavaScript works</p>
              </div>
              <div className="card-body">
                <p className="card-text">Tecnical Documentation Page</p>
              </div>
            </a>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Works