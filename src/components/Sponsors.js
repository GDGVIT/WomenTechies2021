import React from 'react'
import google from './../assets/past-sponsors/google.png'
import microsoft from './../assets/past-sponsors/microsoft.png'
import github from './../assets/past-sponsors/github.png'
import cloudsploit from './../assets/past-sponsors/cloudsploit.png'
import agora from './../assets/past-sponsors/agora.png'
import sketch from './../assets/past-sponsors/sketch.png'
import balsamiq from './../assets/past-sponsors/balsamiq.png'
import bugsee from './../assets/past-sponsors/bugsee.png'
import lbry from './../assets/past-sponsors/lbry.png'
import opensuse from './../assets/past-sponsors/opensuse.png'
import brochure from './../assets/Brochure.pdf'
import { FaDownload } from 'react-icons/fa'

const Sponsors = React.forwardRef(({ setSponsors }, ref) => {
  return (
    <div className='sponsors' id='sponsors' ref={ref}>
      <div className='sponsors-title'>Past Sponsors</div>
      <div className='sponsors-gallery'>
        <div><img src={google} alt='Google' /></div>
        <div><img src={microsoft} alt='Microsoft' /></div>
        <div><img src={github} alt='Github' /></div>
        <div><img src={cloudsploit} alt='CloudSploit' /></div>
        <div><img src={agora} alt='Agora' /></div>
        <div><img src={sketch} alt='Sketch' /></div>
        <div><img src={balsamiq} alt='Balsamiq' /></div>
        <div><img src={bugsee} alt='BUGSEE' /></div>
        <div><img src={lbry} alt='LBRY' /></div>
        <div><img src={opensuse} alt='openSUSE' /></div>
      </div>
      <a href={brochure} download><button className='download button'><FaDownload style={{ color: '#fff', cursor: 'pointer' }} />     Download Brochure</button></a>
    </div>
  )
})

export default Sponsors
