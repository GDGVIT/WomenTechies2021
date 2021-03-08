import React from 'react'
// import usha from './../assets/usha.jpg'
// import lakshya from './../assets/lakshya.jpg'
// import vandana from './../assets/vandana.jpg'

const Speakers = React.forwardRef(({ setSpeakers }, ref) => {
  return (
    <div className='speakers' id='speakers' ref={ref}>
      <div className='speakers-title'>Speakers</div>
    </div>
  )
})

export default Speakers
