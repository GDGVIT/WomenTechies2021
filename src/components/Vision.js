import React from 'react'
import visionBg from './../assets/vision-bg.svg'
import visionImg from './../assets/vision-img.svg'

const Vision = React.forwardRef(({ setVision }, ref) => {
  return (
    <div className='vision' id='vision' ref={ref}>
      <img className='vision-bg' src={visionBg} alt='bg' />
      <div className='vision-content'>
        <div className='home-title'>Our Vision</div>
        <p>We have been organising Women Techies with a goal to encourage and facilitate the participation of women in the tech space.</p>
        <p>Knowing that our efforts benefit so many talented women and being able to see the satisfaction on our participants' faces makes all of us extremely proud in the work that we do.</p>
      </div>
      <div className='vision-img'><img src={visionImg} alt='WomenTechies21' /></div>
    </div>
  )
})

export default Vision
