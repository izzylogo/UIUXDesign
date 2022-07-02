import React from 'react'
import '../styles/Company.scss'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'
import { motion, Variants } from 'framer-motion'


const compAnimate={
  offscreen:{opacity: 0},
  onscreen:{opacity: 1, transition: {delay: 1, duration: 1}}
}
const Companies = () => {
  return (
    <motion.div className='company'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:1}}
      variants={compAnimate}
    >
       <img src={google} alt="" />
       <img src={slack} alt="" />
       <img src={atlassian} alt="" />
       <img src={dropbox} alt="" />
       <img src={shopify} alt="" />
    </motion.div>
  )
}

export default Companies