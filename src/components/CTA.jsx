import React from 'react'
import '../styles/CTA.scss'
import { motion, Variants } from 'framer-motion'


const ctaAnimate={
  offscreen:{opacity: 0},
  onscreen:{opacity: 1, transition: {delay: 0.5, duration: 0.8}}
}

const CTA = () => {
  return (
    <motion.div className='cta'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:0.6}}
      transition={{staggerChildren:0.5}}
    >
        <motion.div className="ctacover"
          variants={ctaAnimate}
        >
            <div className="topic">
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <button>Get Started</button>
        </motion.div>
    </motion.div>
  )
}

export default CTA