import React from 'react'
import '../styles/FeatureDet.scss'
import { motion, Variants } from 'framer-motion'



const moveL={
  offscreen:{x: 50,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, type: 'spring'}}
}

const FeatureDet = ({subject, info}) => {
  return (
    <motion.div className='featDet'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{once:true, amount:0.6}}
    transition={{staggerChildren:0.5}}
    >
        <motion.div className="featLeft"
          variants={moveL}
        >
            <div className="gradient__line"></div>
            <div className="subject">{subject}</div>
        </motion.div>
        <motion.div className="featRight"
          variants={moveL}
        >
            <p>{info}</p>
        </motion.div>
    </motion.div>
  )
}

export default FeatureDet