import React from 'react'

const Teaser = React.forwardRef(({ setTeaser }, ref) => {
  return (
    <div className='teaser' id='teaser' ref={ref}>
      <div className='teaser-title'>Teaser</div>
      <div className='yt-container'>
        <iframe title='teaser-video' height='100%' width='100%' src='https://youtube.com/embed/2nM268aBTG0' />
      </div>
    </div>
  )
})

export default Teaser
