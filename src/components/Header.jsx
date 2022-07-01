import React from 'react'
import '../styles/Header.scss'
import pic from '../assets/ai.png'
import ppl from '../assets/people.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p className='desc'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <form action="">
          <input type="text" />
          <button>Get Started</button>
        </form>
        <div className="people">
          <img src={ppl} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="right">
        <img src={pic} alt="ai" />
      </div>
    </div>
  )
}

export default Header