import React from 'react'
import '../styles/Whatisgpx.scss'
import Gpts from './Gpts'
import { motion, Variants } from 'framer-motion'


const move={
   offscreen:{x: -100,opacity: 0,display: 'none'},
  onscreen:{ x: 0,opacity: 1, display: 'block', transition: { duration: 1, type: 'spring'}}
}

const moveL={
  offscreen:{x: 100,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, type: 'spring'}}
}

const Whatisgpx = () => {
  return (
    <div className='gpx'>
      <div className="contain">
        <motion.div className="what"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.6}}
          transition={{staggerChildren:0.5}}
        >
          <motion.div className="left"
            variants={move}
          >
            <motion.div className='line'
              initial={{x: -1000}}
              animate={{x: 0}}
              transition={{duration: 0.6, delay: 0.2, type: 'spring' }}
            ></motion.div>
            <motion.h4
              initial={{x: -1000}}
              animate={{x: 0}}
              transition={{duration: 1, delay: 0.9, type: 'spring'}}
            >What is GPT-3</motion.h4>
          </motion.div>
          <motion.div className="right"
            variants={moveL}
          >
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </motion.div>
        </motion.div>
        <motion.div className="int"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.8}}
          transition={{staggerChildren:0.5}}
        >
          <motion.div className="left-int"
            //  initial={{x: -1000}}
            //  animate={{x: 0}}
            //  transition={{duration: 0.6, delay: 0.2, type: 'spring' }}
            variants={move}
          >
            <motion.h3 className='gradient__text'>
              The possibilities are beyond your imagination
            </motion.h3>
          </motion.div>
          <motion.div className="right-int gradient__text" 
            variants={moveL}
          >
            <p>Explore The Library</p>
          </motion.div>
        </motion.div>
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