import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import dscLogo from './../assets/DSClogo.svg'
// import dscLogo from './../assets/dsc-logo.png'
import discord from './../assets/discord.png'
import Modal from './Modal'

// const Nav = ({ active, introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef, faqRef, timelineRef, teaserRef, speakersRef }) => {
const Nav = ({ active, introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef, faqRef, timelineRef, teaserRef }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [discoom, setDiscoom] = useState(true)
  const [width, setWidth] = useState(0)

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
  const teaserScroll = () => {
    if (menuOpen) onClick()
    teaserRef.scrollIntoView({ behavior: 'smooth' })
  }
  const timelineScroll = () => {
    if (menuOpen) onClick()
    timelineRef.scrollIntoView({ behavior: 'smooth' })
  }
  // const speakersScroll = () => {
  //   if (menuOpen) onClick()
  //   speakersRef.scrollIntoView({ behavior: 'smooth' })
  // }
  const sponsorsScroll = () => {
    if (menuOpen) onClick()
    sponsorsRef.scrollIntoView({ behavior: 'smooth' })
  }
  const faqScroll = () => {
    if (menuOpen) onClick()
    faqRef.scrollIntoView({ behavior: 'smooth' })
  }
  const contactScroll = () => {
    if (menuOpen) onClick()
    contactRef.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDiscoom(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [discoom])
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    onResize()
  }, [width])

  const navbarItems = (
    <>
      <li><span className={`nav-timeline ${(active === 'timeline') ? 'nav-timeline-active' : ''}`} onClick={timelineScroll}>Timeline</span></li>
      {/* <li><span className={`nav-speakers ${(active === 'speakers') ? 'nav-speakers-active' : ''}`} onClick={speakersScroll}>Speakers</span></li> */}
      <li><span className={`nav-sponsors ${(active === 'sponsors') ? 'nav-sponsors-active' : ''}`} onClick={sponsorsScroll}>Sponsors</span></li>
      <li><span className={`nav-faq ${(active === 'faq') ? 'nav-faq-active' : ''}`} onClick={faqScroll}>FAQ's</span></li>
      <li><span className={`nav-contact ${(active === 'contact') ? 'nav-contact-active' : ''}`} onClick={contactScroll}>Contact Us</span></li>
    </>
  )

  return (
    <>
      <header>
        <a href='https://dscvit.com/' target='_blank' rel='noreferrer'><img className='dsc-logo' src={dscLogo} alt='GDSC Logo' /></a>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><span className={`nav-home ${(active === 'intro') ? 'nav-home-active' : ''}`} onClick={introScroll}>Home</span></li>
            <li><span className={`nav-about ${(active === 'about') ? 'nav-about-active' : ''}`} onClick={aboutScroll}>About GDSC</span></li>
            <li><span className={`nav-hack ${(active === 'hack') ? 'nav-hack-active' : ''}`} onClick={hackScroll}>Hackathon</span></li>
            <li><span className={`nav-vision ${(active === 'vision') ? 'nav-vision-active' : ''}`} onClick={visionScroll}>Vision</span></li>
            <li><span className={`nav-teaser ${(active === 'teaser') ? 'nav-teaser-active' : ''}`} onClick={teaserScroll}>Teaser</span></li>
            {/* <li><NavLink to="teaser" exact activeClassName='nav-active' onClick={() => setShow(true)}>Teaser</NavLink></li> */}
            {/* <li><NavLink to="speakers" exact activeClassName='nav-active' onClick={() => setShow(true)}>Speakers</NavLink></li> */}
            <CSSTransition in={width > 1200} unmountOnExit timeout={{ enter: 0, exit: 0 }}>
              <li>
                <ul className='nav-links-desktop'>
                  {navbarItems}
                </ul>
                <span className='nav-more'>More</span>
              </li>
            </CSSTransition>
            <CSSTransition in={width < 1200} unmountOnExit timeout={{ enter: 0, exit: 0 }}>
              <>
                {navbarItems}
              </>
            </CSSTransition>
            <Modal show={show} onClose={() => setShow(false)} />
          </ul>
        </nav>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={onClick}>
          <div className='line1' />
          <div className='line2' />
          <div className='line3' />
        </div>
      </header>
      <div className={`discord-widget ${discoom && 'open'}`}>
        <a href='https://discord.gg/PvkaBF7yp4' target='_blank' rel='noreferrer'>
          <img src={discord} alt='Discord' className='discord-logo' />
          <div className='discord-bg'>Join the #wt22 Discord!</div>
        </a>
      </div>
    </>
  )
}

export default Nav
