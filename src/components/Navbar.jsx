import React, { useState } from 'react'
import '../styles/Navbar.scss'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
    console.log(toggle)
  }

  return (
    <div className='navbar'>
      <div className="side">
        <img className='logo' src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>What is GPT</li>
            <li>Open AI</li>
            <li>Case Study</li>
            <li>Library</li>
        </ul>
      </div>
      <div className="sign">
          <p>Sign in</p>
          <button>Sign Up</button>
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