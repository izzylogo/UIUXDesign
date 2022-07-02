import React from 'react'
import '../styles/Footer.scss'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="fHeader">
            <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        </div>
        <div className="btn">
            <button>Request Early Access</button>
        </div>
        <div className="foot">
            <div className="footBot">
                <div className="logos">
                    <img src={logo} alt="" />
                    <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="info">
                    <div className="link">
                        <h6>Links</h6>
                        <ul>
                            <li>Overons</li>
                            <li>Social Media</li>
                            <li>Counters</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="link">
                        <h6>Companys</h6>
                        <ul>
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="link">
                        <h6>Get in touch</h6>
                        <ul>
                            <li>Crechterwoord K12 <br /> 182 DK Alknjkcb</li>
                            <li>085-132567</li>
                            <li>info@payme.net</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="last">
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer