import { useState, useEffect } from 'react'
import Intro from './Intro'
import About from './About'
import Hackathon from './Hackathon'
import Vision from './Vision'
import Sponsors from './Sponsors'
import Contact from './Contact'
import Modal from './Modal'

const Home = ({ setActive, introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef }) => {
  const [show, setShow] = useState(false)
  const [offset, setOffset] = useState(0)
  const [intro, setIntro] = useState(0)
  const [about, setAbout] = useState(0)
  const [hack, setHack] = useState(0)
  const [vision, setVision] = useState(0)
  const [sponsors, setSponsors] = useState(0)
  const [contact, setContact] = useState(0)

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
      else if (offset <= (vision + sponsors) / 2) setActive('vision')
      else if (offset <= (sponsors + contact) / 2) setActive('sponsors')
      else setActive('contact')
    }
    setIntro(introRef.current.offsetTop)
    setAbout(aboutRef.current.offsetTop)
    setHack(hackRef.current.offsetTop)
    setVision(visionRef.current.offsetTop)
    setSponsors(sponsorsRef.current.offsetTop)
    setContact(contactRef.current.offsetTop)
    window.onscroll = () => {
      scrollFunc()
    }
    scrollFunc()
  }, [introRef, aboutRef, hackRef, visionRef, sponsorsRef, contactRef, offset, intro, about, setActive, hack, vision, sponsors, contact])

  return (
    <div className='home' id='home'>
      <Intro setIntro={setIntro} ref={introRef} />
      <About setAbout={setAbout} ref={aboutRef} />
      <Hackathon setHack={setHack} ref={hackRef} />
      <Vision setVision={setVision} ref={visionRef} />
      <Sponsors setSponsors={setSponsors} ref={sponsorsRef} />
      <Contact setContact={setContact} ref={contactRef} />
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  )
}

export default Home
