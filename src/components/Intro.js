import React, { useEffect } from 'react'
// import { BsFillPlayFill } from 'react-icons/bs'
import intro from './../assets/intro-img.svg'

const Intro = React.forwardRef(({ setIntro }, ref) => {
  useEffect(() => {
    const scDev = document.createElement('script')
    scDev.src = 'https://apply.devfolio.co/v2/sdk.js'
    scDev.async = true
    document.body.appendChild(scDev)
  }, [])

  return (
    <div className='intro' ref={ref}>
      <div className='first'>
        <div className='first-logo'>
          {/* <svg src={logo} alt="WomenTechies21 Logo" /> */}
          <svg xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' width='334' height='210' viewBox='0 0 334 210'>
            <defs>
              <clipPath id='clip-Custom_Size_1'>
                <rect width='334' height='210' />
              </clipPath>
            </defs>
            <g id='Custom_Size_1' data-name='Custom Size – 1' clipPath='url(#clip-Custom_Size_1)'>
              <rect width='334' height='210' fill='#fff' />
              <g id='Group_1' data-name='Group 1' transform='translate(-335 -163)'>
                <text id='Women_Techies_' data-name='Women Techies' transform='translate(275 180)' fill='#fc257e' fontSize='72' fontFamily='Metropolis' fontWeight='700'><tspan x='90.576' y='57'>Women</tspan><tspan x='95.84' y='120'>Techies</tspan><tspan x='216' y='183' /></text>
                <text id='_2021' data-name='2021' transform='translate(458 318)' fill='#fc257e' fontSize='37' fontFamily='Metropolis' fontWeight='700'><tspan x='2.007' y='29'>2021</tspan></text>
                <line id='Line_1' data-name='Line 1' x2='79' transform='translate(373.5 333.5)' fill='none' stroke='#fc257e' strokeWidth='3' />
                <line id='Line_2' data-name='Line 2' x2='79' transform='translate(555.5 333.5)' fill='none' stroke='#fc257e' strokeWidth='3' />
              </g>
            </g>
          </svg>

        </div>
        {/* <div className='first-soon'>Coming Soon</div> */}
        <a href='https://womentechies21.hackerearth.com/' className='register-button' target='_blank' rel='noreferrer'><button className='register button'>Register</button></a>
        {/* <div
          className='apply-button'
          data-hackathon-slug='women-techies'
          data-button-theme='light'
          style={{ height: '44px', width: '312px' }}
        /> */}
        <a href='https://dsc.community.dev/events/details/developer-student-clubs-vellore-institute-of-technology-presents-womentechies-2021/#/' target='_blank' rel='noreferrer'>RSVP for Updates</a>
        {/* <a href='https://www.instagram.com/reel/CLBd9tWBIGY/?igshid=1uga220uun2gt' target='_blank' rel='noreferrer' className='first-teaser'><BsFillPlayFill style={{ color: '#fc257e', cursor: 'pointer' }} />    Recap</a> */}
      </div>
      <div className='first-img'><img src={intro} alt='Women Techies 2021' /></div>
    </div>
  )
})

export default Intro
