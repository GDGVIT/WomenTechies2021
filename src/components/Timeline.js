import React from 'react'
// import day1 from './../assets/timeline1.png'
// import day2 from './../assets/timeline2.svg'

const Timeline = React.forwardRef(({ setTimeline }, ref) => {
  return (
    <div className='timeline' id='timeline' ref={ref}>
      <div className='timeline-title'>Timeline</div>
      <ul>
        <li>
          <input type='radio' value='1' name='radio' id='radio1' checked />
          <label for='radio1'>Day 1</label>
        </li>
        <li>
          <input type='radio' value='2' name='radio' id='radio2' />
          <label for='radio2'>Day 2</label>
        </li>
      </ul>
      {/* <div className='timeline-img'>
        <div className='timeline-inner'>
          <img src={day1} alt='Timeline - Day 1' />
        </div>
      </div>
      <div className='timeline-img' style={{ display: 'none' }}>
        <img src={day2} alt='Timeline - Day 2' />
      </div> */}
    </div>
  )
})

export default Timeline
