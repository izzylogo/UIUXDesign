import React from 'react'
import '../styles/Whatisgpx.scss'
import Gpts from './Gpts'

const Whatisgpx = () => {
  return (
    <div className='gpx'>
      <div className="contain">
        <div className="what">
          <div className="left">
            <div className='line'></div>
            <h4>What is GPT-3</h4>
          </div>
          <div className="right">
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
        </div>
        <div className="int">
          <div className="left-int">
            <h3 className='gradient__text'>The possibilities are beyond your imagination</h3>
          </div>
          <div className="right-int gradient__text">
            <p>Explore The Library</p>
          </div>
        </div>
        <div className="contBox">
          <Gpts
            head='Chatbox'
            detale='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
          />
          <Gpts
            head='Knowledgebase'
            detale='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b '
          />
          <Gpts
            head='Education'
            detale='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          />
        </div>
        
      </div>
    </div>
  )
}

export default Whatisgpx              