import { useState, useRef } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'

function App () {
  const [active, setActive] = useState('')
  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const hackRef = useRef(null)
  const visionRef = useRef(null)
  const teaserRef = useRef(null)
  const timelineRef = useRef(null)
  // const speakersRef = useRef(null)
  const sponsorsRef = useRef(null)
  const contactRef = useRef(null)
  const faqRef = useRef(null)

  return (
    <>
      <Nav active={active} introRef={introRef.current} aboutRef={aboutRef.current} hackRef={hackRef.current} visionRef={visionRef.current} sponsorsRef={sponsorsRef.current} contactRef={contactRef.current} faqRef={faqRef.current} timelineRef={timelineRef.current} teaserRef={teaserRef.current} />
      {/* <Nav active={active} introRef={introRef.current} aboutRef={aboutRef.current} hackRef={hackRef.current} visionRef={visionRef.current} sponsorsRef={sponsorsRef.current} contactRef={contactRef.current} faqRef={faqRef.current} timelineRef={timelineRef.current} teaserRef={teaserRef.current} speakersRef={speakersRef.current} /> */}
      <Home setActive={setActive} introRef={introRef} aboutRef={aboutRef} hackRef={hackRef} visionRef={visionRef} sponsorsRef={sponsorsRef} contactRef={contactRef} faqRef={faqRef} timelineRef={timelineRef} teaserRef={teaserRef} />
      {/* <Home setActive={setActive} introRef={introRef} aboutRef={aboutRef} hackRef={hackRef} visionRef={visionRef} sponsorsRef={sponsorsRef} contactRef={contactRef} faqRef={faqRef} timelineRef={timelineRef} teaserRef={teaserRef} speakersRef={speakersRef} /> */}
    </>
  )
}

export default App
