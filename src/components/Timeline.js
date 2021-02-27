import React, { useState } from 'react'
import day1 from './../assets/timeline1.svg'
import day2 from './../assets/timeline2.svg'

const Timeline = React.forwardRef(({ setTimeline }, ref) => {
  const [checked, setChecked] = useState(true)
  return (
    <div className='timeline' id='timeline' ref={ref}>
      <div className='timeline-title'>Timeline</div>
      <ul>
        <li>
          <input type='radio' key='1' value='1' name='radio' id='radio1' checked={checked} onChange={(e) => { setChecked(e.target.value) }} />
          <label htmlFor='radio1'>Day 1</label>
        </li>
        <li>
          <input type='radio' key='2' value='2' name='radio' id='radio2' checked={!checked} onChange={(e) => { setChecked(!e.target.value) }} />
          <label htmlFor='radio2'>Day 2</label>
        </li>
      </ul>
      <div className='timeline-img'>
        <div className='timeline-inner'>
          <img src={checked ? day1 : day2} alt='Timeline' id='timeline-day-img' />
        </div>
      </div>
    </div>
  )
})

export default Timeline
