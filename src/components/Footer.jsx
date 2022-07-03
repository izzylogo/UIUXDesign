import React from 'react'
import '../styles/Footer.scss'
import logo from '../assets/logo.svg'
import { motion, Variants } from 'framer-motion'

const move={
    offscreen:{y: -30,opacity: 0,display: 'none'},
   onscreen:{ y: 0,opacity: 1, display: 'block', transition: { duration: 0.5, delay: 0.5, type: 'spring'}}
}

const moveR={
    offscreen:{x: -30,opacity: 0,display: 'none'},
    onscreen:{ x: 0,opacity: 1, display: 'block', transition: { duration: 1, delay: 1, type: 'spring'}}
}

const moveL={
    offscreen:{x: 30,opacity: 0,},
    onscreen:{ x: 0,opacity: 1, transition: { duration: 1, delay: 1, type: 'spring'}}
  }

const Footer = () => {
  return (
    <motion.div className='footer'
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{once:false, amount:0.2}}
        transition={{staggerChildren:0.5}}
    >
        <motion.div className="fHeader"
            variants={move}
        >
            <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        </motion.div>
        <motion.div className="btn"
            variants={move}
        >
            <button>Request Early Access</button>
        </motion.div>
        <motion.div className="foot"
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:false, amount:0.6}}
            transition={{staggerChildren:0.6}}
        >
            <div className="footBot">
                <motion.div className="logos"
                    variants={moveR}
                >
                    <img src={logo} alt="" />
                    <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
                </motion.div>
                <motion.div className="info"
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    viewport={{once:false, amount:0.6}}
                    transition={{staggerChildren:0.6}}
                >
                    <motion.div className="link" variants={moveL}>
                        <h6>Links</h6>
                        <ul>
                            <li>Overons</li>
                            <li>Social Media</li>
                            <li>Counters</li>
                            <li>Contact</li>
                        </ul>
                    </motion.div>
                    <motion.div className="link" variants={moveL}>
                        <h6>Companys</h6>
                        <ul>
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </motion.div>
                    <motion.div className="link" variants={moveL}>
                        <h6>Get in touch</h6>
                        <ul>
                            <li>Crechterwoord K12 <br /> 182 DK Alknjkcb</li>
                            <li>085-132567</li>
                            <li>info@payme.net</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
        <motion.div className="last" variants={move}>
            <p>© 2021 GPT-3. All rights reserved.</p>
        </motion.div>
    </motion.div>
  )
}

export default Footer