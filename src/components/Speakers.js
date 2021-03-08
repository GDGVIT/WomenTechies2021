import React from 'react'
import usha from './../assets/usha.jpg'
import lakshya from './../assets/lakshya.jpg'
import vandana from './../assets/vandana.jpg'

const Speakers = React.forwardRef(({ setSpeakers }, ref) => {
  return (
    <div className='speakers' id='speakers' ref={ref}>
      <div className='speakers-title'>Speakers</div>
      <div className='speakers-container'>

        <div className='card'>
          <div className='card-front purple'>
            <div className='card-img'><img src={usha} alt='Usha Rengaraju' /></div>
            <div className='card-data'>
              <h3 className='card-name'>Usha Rengaraju</h3>
              <h5 className='card-title'>Data Science Consultant at Infinite-Sum Modeling Inc.</h5>
            </div>
          </div>
          <div className='card-back purple'>
            <span className='card-description'>Usha specializes in Probabilistic Graphical Models, and is the first woman to be a 2x Kaggle Grandmaster. Her knowledge extends far and wide, from Psychology to Business Analytics. She’s an enthusiastic public speaker and ever-ready to try new things.</span>
          </div>
        </div>

        <div className='card'>
          <div className='card-front yellow'>
            <div className='card-img'><img src={lakshya} alt='Lakshya Sivaramakrishnan' /></div>
            <div className='card-data'>
              <h3 className='card-name'>Lakshya Sivaramakrishnan</h3>
              <h5 className='card-title'>Program Lead at Google via Wipro</h5>
            </div>
          </div>
          <div className='card-back yellow'>
            <span className='card-description'>Lakshya is a polymath having worked in a plethora of domains. She is the Program Lead for Women Techmakers India, TEDx speaker, winner of the 'Women in AI Leadership' Award by Analytics India Magazine and the creator of Prayogshala. With over 6 years of industrial experience, she will be sharing the importance of hackathons and her journey as a woman in tech with us.</span>
          </div>
        </div>

        <div className='card'>
          <div className='card-front pink'>
            <div className='card-img'><img src={vandana} alt='Vandana Verma' /></div>
            <div className='card-data'>
              <h3 className='card-name'>Vandana Verma</h3>
              <h5 className='card-title'>Global BoD at OWASP & InfosecGirls</h5>
            </div>
          </div>
          <div className='card-back pink'>
            <span className='card-description'>Vandana is a highly accredited woman and has a plethora of experience and skills. She is currently the Global BoD at the highly accredited OWASP Foundation and is also the founder of Infosec girls. With experience at IBM, Time Inc, and Accenture, among others, she’ll be with us to talk about her journey as a woman in the fast lane of tech!</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Speakers
