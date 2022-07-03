import React from 'react'
import '../styles/Gpts.scss'
import { motion, Variants } from 'framer-motion'

const move={
  offscreen:{x: -1000,opacity: 0, display: 'none'},
  onscreen:{ x: 0,opacity: 1,display: 'block', transition: { duration: 1, type: 'spring'}}
}

const Gpts = ({head, detale}) => {
  return (
    <motion.div className='gpt'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:0.6}}
      transition={{staggerChildren:0.5}}
    >
        <motion.div className="top"
          variants={move}
        >
            <motion.div className="line"
              initial={{x: -1000}}
              animate={{x: 0}}
              transition={{duration: 0.6, delay: 0.2, type: 'spring' }}
            ></motion.div>
            <h4>{head}</h4>
        </motion.div>
        <motion.div className="detale"
          variants={move}
        >
            {detale}      
        </motion.div>

    </motion.div>
  )
}

export default Gpts