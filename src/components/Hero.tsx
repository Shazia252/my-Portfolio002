import React from 'react'
import Navbar from './Navbar'
// import Image from 'next/image'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/SSPIC.jpeg)] bg-cover'
        style={{backgroundSize: "15%", backgroundPosition: "left 100px top 100px"}}
      >
        <Navbar />
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[30px] sm:text-[60px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p data-aos="zoom-in-up">Hey Im</p>
              <p data-aos="zoom-in-up">Shazia</p>
              <p data-aos="zoom-in-up">Sultana</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
