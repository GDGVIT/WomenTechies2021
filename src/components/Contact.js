import React from 'react'
import behance from './../assets/social/behance.svg'
import facebook from './../assets/social/facebook.svg'
import linkedin from './../assets/social/linkedin.svg'
import github from './../assets/social/github.svg'
import medium from './../assets/social/medium.svg'
import youtube from './../assets/social/youtube.svg'
import twitter from './../assets/social/twitter.svg'
import instagram from './../assets/social/instagram.svg'

const Contact = React.forwardRef(({ setContact }, ref) => {
  return (
    <div className='contact' id='contact' ref={ref}>
      <div className='contact-title'>Contact Us</div>
      <ul>
        <li>
          <div className='contact-name'>Chanakya Kapoor</div>
          <a className='contact-email' href='mailto:chanakyavkapoor@gmail.com'>chanakyavkapoor@gmail.com</a>
          <span className='contact-no'>+91 81304 88585</span>
        </li>
        <li>
          <div className='contact-name'>Shresth Tiwary</div>
          <a className='contact-email' href='mailto:shresthtiwary11@gmail.com'>shresthtiwary11@gmail.com</a>
          <span className='contact-no'>+91 97429 40667</span>
        </li>
      </ul>
      <div className='social-title'>Social Media</div>
      <div className='social-gallery'>
        <a href='https://www.behance.net/dsc-vit' target='_blank' rel='noreferrer'><img src={behance} alt='Behance' /></a>
        <a href='https://facebook.com/dscvitvellore' target='_blank' rel='noreferrer'><img src={facebook} alt='Facebook' /></a>
        <a href='https://www.linkedin.com/company/dscvit' target='_blank' rel='noreferrer'><img src={linkedin} alt='LinkedIn' /></a>
        <a href='https://github.com/GDGVIT' target='_blank' rel='noreferrer'><img src={github} alt='Github' /></a>
        <a href='https://medium.com/gdg-vit' target='_blank' rel='noreferrer'><img src={medium} alt='Medium' /></a>
        <a href='https://www.youtube.com/channel/UCvT-ZJF7fXHJi9kDeCPR-zg' target='_blank' rel='noreferrer'><img src={youtube} alt='YouTube' /></a>
        <a href='https://twitter.com/dscvit' target='_blank' rel='noreferrer'><img src={twitter} alt='Twitter' /></a>
        <a href='https://instagram.com/dscvitvellore' target='_blank' rel='noreferrer'><img src={instagram} alt='Instagram' /></a>
      </div>
    </div>
  )
})

export default Contact
