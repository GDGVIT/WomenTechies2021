import React from 'react'
import devfolio from './../assets/past-sponsors/devfolio.png'
import matic from './../assets/past-sponsors/matic.png'
import portis from './../assets/past-sponsors/portis.png'
import tezos from './../assets/past-sponsors/tezos.png'
import agora from './../assets/past-sponsors/agora.png'
import yocket from './../assets/past-sponsors/yocket.png'
import balsamiq from './../assets/past-sponsors/balsamiq.png'
import packtpub from './../assets/past-sponsors/packtpub.png'
import spike from './../assets/past-sponsors/spike.png'
import brochure from './../assets/Brochure.pdf'
import { FaDownload } from 'react-icons/fa'

const Sponsors = React.forwardRef(({ setSponsors }, ref) => {
  return (
    <div className='sponsors' id='sponsors' ref={ref}>
      <div className='sponsors-title'>Our Sponsors</div>
      <div className='sponsors-gallery'>
        <div><img src={devfolio} alt='devfolio' /></div>
        <div><img src={matic} alt='matic' /></div>
        <div><img src={portis} alt='portis' /></div>
        <div><img src={tezos} alt='tezos' /></div>
        <div><img src={agora} alt='Agora' /></div>
        <div><img src={balsamiq} alt='Balsamiq' /></div>
        <div><img src={yocket} alt='Yocket' /></div>
        <div><img src={packtpub} alt='packtpub' /></div>
        <div><img src={spike} alt='spike' /></div>
      </div>
      <a href={brochure} download><button className='download button'><FaDownload style={{ color: '#fff', cursor: 'pointer' }} />     Download Brochure</button></a>
    </div>
  )
})

export default Sponsors
