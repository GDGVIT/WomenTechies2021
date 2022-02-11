import React from 'react'
import aboutBg from './../assets/about-bg.svg'
import aboutImg from './../assets/about-img.svg'

const About = React.forwardRef(({ setAbout }, ref) => {
  return (
    <div className='about' id='about-dsc' ref={ref}>
      <div>
        <img className='about-bg' src={aboutBg} alt='bg' />
        <ul>
          <li>
            <div className='home-title'>About GDSC</div>
            <p>GDSC VIT is a student community at VIT Vellore. We strive to bring about technological innovations among students and we do so by providing a platform for them to exhibit their talents. We are a group of passionate designers, developers and managers who work together to bring about collaborative results that better the lives of everyone around us.</p>
          </li>
          <li>
            <div className='home-title'>About VIT</div>
            <p>Vellore Institute of Technology, Vellore is one of the top-rated engineering colleges in India. Diversity is the strongest aspect of the institute and the students from various states and nations, the key to its reputation. The university works on ideas and executes tasks of different domains under Clubs and Chapters.</p>
          </li>
        </ul>
      </div>
      <div className='about-img'><img src={aboutImg} alt='WomenTechies21' /></div>
    </div>
  )
})

export default About
