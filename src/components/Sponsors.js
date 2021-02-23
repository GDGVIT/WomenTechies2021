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
// import kaspersky from './../assets/past-sponsors/kaspersky.png'
import brochure from './../assets/Brochure.pdf'
import { FaDownload } from 'react-icons/fa'

const Sponsors = React.forwardRef(({ setSponsors }, ref) => {
  return (
    <div className='sponsors' id='sponsors' ref={ref}>
      <div className='sponsors-title'>Our Sponsors</div>
      <div className='sponsors-gallery'>
        <div><a href='https://devfolio.co/' target='_blank' rel='noreferrer'><img src={devfolio} alt='devfolio' /></a></div>
        <div><a href='https://matic.network/' target='_blank' rel='noreferrer'><img src={matic} alt='matic' /></a></div>
        <div><a href='https://www.portis.io/' target='_blank' rel='noreferrer'><img src={portis} alt='portis' /></a></div>
        <div><a href='https://tezos.com/' target='_blank' rel='noreferrer'><img src={tezos} alt='tezos' /></a></div>
        <div><a href='https://www.agora.io/' target='_blank' rel='noreferrer'><img src={agora} alt='Agora' /></a></div>
        <div><a href='https://balsamiq.com/' target='_blank' rel='noreferrer'><img src={balsamiq} alt='Balsamiq' /></a></div>
        <div><a href='https://yocket.in/' target='_blank' rel='noreferrer'><img src={yocket} alt='Yocket' /></a></div>
        <div><a href='https://www.packtpub.com/' target='_blank' rel='noreferrer'><img src={packtpub} alt='packtpub' /></a></div>
        <div><a href='https://spikeapp.in/' target='_blank' rel='noreferrer'><img src={spike} alt='Spike' /></a></div>
        {/* <div><a href='https://academy.kaspersky.com/' target='_blank' rel='noreferrer'><img src={kaspersky} alt='Kaspersky' /></a></div> */}
        <div><a href='https://academy.kaspersky.com/' target='_blank' rel='noreferrer'> </a></div>
      </div>
      <a href={brochure} download><button className='download button'><FaDownload style={{ color: '#fff', cursor: 'pointer' }} />     Download Brochure</button></a>
    </div>
  )
})

export default Sponsors
