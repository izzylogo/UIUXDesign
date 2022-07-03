import React from 'react'
import '../styles/Header.scss'
import pic from '../assets/ai.png'
import ppl from '../assets/people.png'
import { motion, Variants } from 'framer-motion'


const textAnimate={
  offscreen:{x: -1000, opacity: 0},
  onscreen:{x: 0, 
    opacity: 1,
    transition: {type: 'spring',
    bounce: 0.5,
    delay: 1.5,
    duration: 2.8}
  }
}

const pAnimate={
  offscreen:{x: -1000},
  onscreen:{x: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 1.5,
      duration: 2.8
    }
  }
}

const formAnimate={
  offscreen:{x: -1000, opacity: 0},
  onscreen:{x: 0, opacity: [0.5, 1],
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 1.8,
      duration: 2.8
    }
  }
}

const pplAnimate={
  offscreen:{x: -1000},
  onscreen:{x: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 1.9,
      duration: 2.8
    }
  }
}

// const imgAnimate={
//   offscreen:{x: -1000},
//   onscreen:{x: 0,
//     transition: {
//       type: 'spring',
//       bounce: 0.3,
//       delay: 1.9,
//       duration: 2.8
//     }
//   }
// }

const Header = () => {
  return (
    <div className='header'>
      <motion.div className="left"
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{once:false, amount:0.3}}
        transition={{staggerChildren:0.5}}
      >
        <motion.h1 className='gradient__text'
          variants={textAnimate}
        >Let’s Build Something amazing with GPT-3 OpenAI</motion.h1>
        <motion.p className='desc'
          variants={pAnimate}
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </motion.p>
        <motion.form action=""
          variants={formAnimate}
        >
          <input type="text" />
          <button>Get Started</button>
        </motion.form>
        <motion.div className="people"
          variants={pplAnimate}
        >
          <img src={ppl} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </motion.div>
      </motion.div>
      <motion.div className="right" >
        <motion.img src={pic} alt="ai"
          initial={{x: 2000}}
          animate={{x: 0}}
          transition={{duration: 1, delay: 2.3, bounce: 0.4, type: 'spring'}}
        />
      </motion.div>
    </div>
  )
}

export default Header