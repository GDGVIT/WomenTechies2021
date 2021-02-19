import { useState } from 'react'
import dscLogo from './../assets/dsc-logo.png'
import discord from './../assets/discord.png'
import Modal from './Modal'

const Nav = ({ active, introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [show, setShow] = useState(false)

  const onClick = () => setMenuOpen(!menuOpen)

  const introScroll = () => {
    if (menuOpen) onClick()
    introRef.scrollIntoView({ behavior: 'smooth' })
  }
  const aboutScroll = () => {
    if (menuOpen) onClick()
    aboutRef.scrollIntoView({ behavior: 'smooth' })
  }
  const hackScroll = () => {
    if (menuOpen) onClick()
    hackRef.scrollIntoView({ behavior: 'smooth' })
  }
  const visionScroll = () => {
    if (menuOpen) onClick()
    visionRef.scrollIntoView({ behavior: 'smooth' })
  }
  const sponsorsScroll = () => {
    if (menuOpen) onClick()
    sponsorsRef.scrollIntoView({ behavior: 'smooth' })
  }
  const contactScroll = () => {
    if (menuOpen) onClick()
    contactRef.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header>
        <a href='https://dscvit.com/' target='_blank' rel='noreferrer'><img className='dsc-logo' src={dscLogo} alt='DSC Logo' /></a>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><span className={`nav-home ${(active === 'intro') ? 'nav-home-active' : ''}`} onClick={introScroll}>Home</span></li>
            <li><span className={`nav-about ${(active === 'about') ? 'nav-about-active' : ''}`} onClick={aboutScroll}>About DSC</span></li>
            <li><span className={`nav-hack ${(active === 'hack') ? 'nav-hack-active' : ''}`} onClick={hackScroll}>Hackathon</span></li>
            <li><span className={`nav-vision ${(active === 'vision') ? 'nav-vision-active' : ''}`} onClick={visionScroll}>Vision</span></li>
            {/* <li><NavLink to="teaser" exact activeClassName='nav-active' onClick={() => setShow(true)}>Teaser</NavLink></li> */}
            {/* <li><NavLink to="timeline" exact activeClassName='nav-active' onClick={() => setShow(true)}>Timeline</NavLink></li> */}
            {/* <li><NavLink to="speakers" exact activeClassName='nav-active' onClick={() => setShow(true)}>Speakers</NavLink></li> */}
            <li><span className={`nav-sponsors ${(active === 'sponsors') ? 'nav-sponsors-active' : ''}`} onClick={sponsorsScroll}>Sponsors</span></li>
            <li><span className={`nav-contact ${(active === 'contact') ? 'nav-contact-active' : ''}`} onClick={contactScroll}>Contact Us</span></li>
            {/* <li><NavLink to="contact-us" exact activeClassName='nav-active' onClick={() => setShow(true)}>Contact Us</NavLink></li> */}
            {/* <li><NavLink to="faq" exact activeClassName='active' onClick={() => setShow(true)}>FAQ's</NavLink></li> */}
            <Modal show={show} onClose={() => setShow(false)} />
          </ul>
        </nav>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={onClick}>
          <div className='line1' />
          <div className='line2' />
          <div className='line3' />
        </div>
      </header>
      <div className='discord-widget'>
        <a href='https://discord.gg/dEqfTTPPR4' target='_blank' rel='noreferrer'>
          <img src={discord} alt='Discord' className='discord-logo' />
          <div className='discord-bg'>Join the #wt21 Discord!</div>
        </a>
      </div>
    </>
  )
}

export default Nav
