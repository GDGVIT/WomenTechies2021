import React from 'react'
import hackBg from './../assets/hackathon-bg.svg'
import hackImg from './../assets/hackathon-img.svg'

const Hackathon = React.forwardRef(({ setHack }, ref) => {
  return (
    <div className='hackathon' id='hackathon' ref={ref}>
      <div>
        <div className='hack-content'>
          <img className='hack-bg' src={hackBg} alt='bg' />
          <div className='home-title'>About Hackathon</div>
          <p>This 36-hour hackathon aims to provide talented and independent women with the platform and resources to help them grow in their desired field and contribute to society with impactful and beneficial solutions.</p>
          <p><b>There is a minimum requirement of 50% female participation in each team,</b> to ensure and promote women’s participation in tech and tech-related events. </p>
          <p>WomenTechies will be an opportunity for the budding developers to showcase their potential and skills under the mentorship of experts and come up with imperceptible ideas and ground-breaking solutions to problems that could potentially solve the woes of thousands of people.</p>
        </div>
        <div className='hack-img'><img src={hackImg} alt='WomenTechies21' /></div>
      </div>
      {/* <button className="button">Register</button> */}
    </div>
  )
})

export default Hackathon
