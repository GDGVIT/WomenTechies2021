import React from 'react'

const Timeline = React.forwardRef(({ setTimeline }, ref) => {
  return (
    <div className='timeline' id='timeline' ref={ref}>
      <h1>Test</h1>
    </div>
  )
})

export default Timeline
