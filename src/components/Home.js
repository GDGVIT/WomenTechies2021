import { useState, useEffect } from 'react'
import Intro from './Intro'
import About from './About'
import Hackathon from './Hackathon'
import Vision from './Vision'
import Teaser from './Teaser'
import Timeline from './Timeline'
import Sponsors from './Sponsors'
import Faq from './FAQ'
import Contact from './Contact'
import Modal from './Modal'

const Home = ({ setActive, introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef, faqRef, timelineRef, teaserRef }) => {
  const [show, setShow] = useState(false)
  const [offset, setOffset] = useState(0)
  const [intro, setIntro] = useState(0)
  const [about, setAbout] = useState(0)
  const [hack, setHack] = useState(0)
  const [vision, setVision] = useState(0)
  const [teaser, setTeaser] = useState(0)
  const [timeline, setTimeline] = useState(0)
  const [sponsors, setSponsors] = useState(0)
  const [contact, setContact] = useState(0)
  const [faq, setFAQ] = useState(0)

  const hisom = () => {
    let text = ''
    if (window.getSelection) {
      text = window.getSelection().toString()
    } else if (document.selection && document.selection.type !== 'Control') {
      text = document.selection.createRange().text
    } else return
    if (text.toLowerCase() === 'dsc' || text.toLowerCase() === 'dsc ') {
      setShow(true)
    }
  }
  document.onmouseup = hisom
  document.onpointerup = hisom

  useEffect(() => {
    const scrollFunc = () => {
      setOffset(window.pageYOffset)
      if (offset <= (intro + about) / 2) setActive('intro')
      else if (offset <= (about + hack) / 2) setActive('about')
      else if (offset <= (hack + vision) / 2) setActive('hack')
      else if (offset <= (vision + teaser) / 2) setActive('vision')
      else if (offset <= (teaser + timeline) / 2) setActive('teaser')
      else if (offset <= (timeline + sponsors) / 2) setActive('timeline')
      else if (offset <= (sponsors + faq) / 2) setActive('sponsors')
      else if (offset <= (faq + contact) / 2) setActive('faq')
      else setActive('contact')
    }
    setIntro(introRef.current.offsetTop)
    setAbout(aboutRef.current.offsetTop)
    setHack(hackRef.current.offsetTop)
    setVision(visionRef.current.offsetTop)
    setTeaser(teaserRef.current.offsetTop)
    setTimeline(timelineRef.current.offsetTop)
    setSponsors(sponsorsRef.current.offsetTop)
    setContact(contactRef.current.offsetTop)
    setFAQ(faqRef.current.offsetTop)
    window.onscroll = () => {
      scrollFunc()
    }
    scrollFunc()
  }, [introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef, faqRef, timelineRef, faq, offset, intro, about, setActive, hack, vision, sponsors, contact, timeline, teaser, teaserRef])

  return (
    <div className='home' id='home'>
      <Intro setIntro={setIntro} ref={introRef} />
      <About setAbout={setAbout} ref={aboutRef} />
      <Hackathon setHack={setHack} ref={hackRef} />
      <Vision setVision={setVision} ref={visionRef} />
      <Teaser setTeaser={setTeaser} ref={teaserRef} />
      <Timeline setTimeline={setTimeline} ref={timelineRef} />
      <Sponsors setSponsors={setSponsors} ref={sponsorsRef} />
      <Faq setFAQ={setFAQ} ref={faqRef} />
      <Contact setContact={setContact} ref={contactRef} />
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  )
}

export default Home
