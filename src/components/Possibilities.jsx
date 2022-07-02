import React from 'react'
import '../styles/Possibilities.scss'
import myAppPic from '../assets/possibility.png'


const Possibilities = () => {
  return (
    <div className='possible'>
        <div className="left">
            <img src={myAppPic} alt="possibilities" className='possImg'/>
        </div>
        <div className="right">
          <p>Request Early Access to Get Started</p>
          <h2 className='gradient__text'>
            The possibilities are beyond your imagination
          </h2>
          <p className='possDet'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='gradient__text'>Request Early Access to Get Started</p>
        </div>
    </div>
  )
}

export default Possibilities