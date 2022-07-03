import React from 'react'
import '../styles/Possibilities.scss'
import myAppPic from '../assets/possibility.png'
import { motion, Variants } from 'framer-motion'

const move={
  offscreen:{x: -50,opacity: 0,display: 'none'},
 onscreen:{ x: 0,opacity: 1, display: 'block', transition: { duration: 1, type: 'spring'}}
}

const moveL={
  offscreen:{x: 50,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, type: 'spring'}}
}


const Possibilities = () => {
  return (
    <motion.div className='possible'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:0.6}}
      transition={{staggerChildren:0.5}}
    >
        <motion.div className="left"
          variants={move}
        >
            <img src={myAppPic} alt="possibilities" className='possImg'/>
        </motion.div>
        <motion.div className="right"
          variants={moveL}
        >
          <p>Request Early Access to Get Started</p>
          <h2 className='gradient__text'>
            The possibilities are beyond your imagination
          </h2>
          <p className='possDet'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='gradient__text'>Request Early Access to Get Started</p>
        </motion.div>
    </motion.div>
  )
}

export default Possibilities