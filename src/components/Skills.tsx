import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 p-2'>As a passionate Junior Frontend Developer, I specialize in building responsive, user-friendly, and visually appealing websites and web applications. I love transforming creative ideas into functional designs using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js. With a keen eye for detail and a focus on clean code, my goal is to enhance user experiences and bring engaging digital products to life.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-red-500 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">TypeScript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
