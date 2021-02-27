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
import kaspersky from './../assets/past-sponsors/kaspersky.svg'
import password from './../assets/past-sponsors/1password.png'
import axure from './../assets/past-sponsors/axure.png'
import sketch from './../assets/past-sponsors/sketch.png'
import nostarchpress from './../assets/past-sponsors/nostarchpress.png'
import wolfram from './../assets/past-sponsors/wolfram.png'
import brochure from './../assets/Brochure.pdf'
import { FaDownload } from 'react-icons/fa'

const Sponsors = React.forwardRef(({ setSponsors }, ref) => {
  return (
    <div className='sponsors' id='sponsors' ref={ref}>
      <div className='sponsors-title'>Our Sponsors</div>
      <div className='sponsors-gallery'>
        <div><a href='https://devfolio.co/' target='_blank' rel='noreferrer'><img src={devfolio} alt='Devfolio' /></a></div>
        <div><a href='https://matic.network/' target='_blank' rel='noreferrer'><img src={matic} alt='Matic' /></a></div>
        <div><a href='https://www.portis.io/' target='_blank' rel='noreferrer'><img src={portis} alt='portis' /></a></div>
        <div><a href='https://tezos.com/' target='_blank' rel='noreferrer'><img src={tezos} alt='Tezos' /></a></div>
        <div><a href='https://www.agora.io/' target='_blank' rel='noreferrer'><img src={agora} alt='agora' /></a></div>
        <div><a href='https://balsamiq.com/' target='_blank' rel='noreferrer'><img src={balsamiq} alt='balsamiq' /></a></div>
        <div><a href='https://yocket.in/' target='_blank' rel='noreferrer'><img src={yocket} alt='Yocket' /></a></div>
        <div><a href='https://www.packtpub.com/' target='_blank' rel='noreferrer'><img src={packtpub} alt='Packtpub' /></a></div>
        <div><a href='https://spikeapp.in/' target='_blank' rel='noreferrer'><img src={spike} alt='Spike' /></a></div>
        <div><a href='https://academy.kaspersky.com/' target='_blank' rel='noreferrer'><img src={kaspersky} alt='Kaspersky' /></a></div>
        <div><a href='https://1password.com/' target='_blank' rel='noreferrer'><img src={password} alt='1Password' /></a></div>
        <div><a href='https://www.axure.com/' target='_blank' rel='noreferrer'><img src={axure} alt='axure' /></a></div>
        <div><a href='https://www.sketch.com/' target='_blank' rel='noreferrer'><img src={sketch} alt='Sketch' /></a></div>
        <div><a href='https://nostarch.com/' target='_blank' rel='noreferrer'><img id='starch' src={nostarchpress} alt='No Starch Press' /></a></div>
        <div><a href='https://www.wolfram.com/language/' target='_blank' rel='noreferrer'><img src={wolfram} alt='Wolfram Language' /></a></div>
      </div>
      <a href={brochure} download><button className='download button'><FaDownload style={{ color: '#fff', cursor: 'pointer' }} />     Download Brochure</button></a>
    </div>
  )
})

export default Sponsors
