import React, { useState } from 'react'
import '../styles/Navbar.scss'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import logo from '../assets/logo.svg'
import { motion, Variants } from 'framer-motion'


const navLogo={
  offscreen:{y: -100},
  onscreen:{y: 0, 
    rotate:[0,30,-30,0],
    transition: {type: 'spring',
    bounce: 0.5,
    delay: 0.5,
    duration: 1
  }
  }

}


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
    console.log(toggle)
  }
  return (
    <div className='navbar'>
      <div className="side">
        <motion.div className="div"
          initial={'offscreen'}
          animate={'onscreen'}     
          variants={navLogo}
        >
          <img className='logo' src={logo} alt="" />
        </motion.div>
        <ul>
            <motion.li
              initial={{y: -100}}
              animate={{y: 0, rotate: [0,15,-15,0]}}
              transition={{ duration: 1, delay: 0.6, bounce: 0.5 }}
            >Home</motion.li>
            <motion.li
               initial={{y: -100}}
               animate={{y: 0, rotate: [0,15,-15,0]}}
               transition={{ duration: 1, delay: 0.8, bounce: 0.5 }}
            >What is GPT</motion.li>
            <motion.li
              initial={{y: -100}}
              animate={{y: 0, rotate: [0,15,-15,0]}}
              transition={{ duration: 1, delay: 0.9, bounce: 0.5 }}
            >Open AI</motion.li>
            <motion.li
              initial={{y: -100}}
              animate={{y: 0, rotate: [0,15,-15,0]}}
              transition={{ duration: 1, delay: 1, bounce: 0.5 }}
            >Case Study</motion.li>
            <motion.li
              initial={{y: -100}}
              animate={{y: 0, rotate: [0,15,-15,0]}}
              transition={{ duration: 1, delay: 1.1, bounce: 0.5 }}
            >Library</motion.li>
        </ul>
      </div>
      <div className="sign">
          <motion.p
            initial={{y: -100}}
            animate={{y: 0, rotate: [0,15,-15,0]}}
            transition={{ duration: 1, delay: 1.3, bounce: 0.5 }}
          >Sign in</motion.p>
          <motion.button
            initial={{y: -100}}
            animate={{y: 0, rotate: [0,15,-15,0]}}
            transition={{ duration: 1, delay: 1.5, bounce: 0.5 }}
          >Sign Up</motion.button>
      </div>

      {/* menu */}
      <div className="menu">
        <div className={toggle ? 'active' : 'menu-list'}>
          <ul>
            <li>Home</li>
            <li>What is GPT</li>
            <li>Open AI</li>
            <li>Case Study</li>
            <li>Library</li>
            <li>Sign in</li>
            <button>Sign Up</button>
          </ul>

        </div>
      </div>
      <HiOutlineMenuAlt3 className='icon' onClick={handleToggle}/>
    </div>
  )
}

export default Navbar