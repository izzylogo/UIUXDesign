import React from 'react'
import '../styles/Gpts.scss'

const Gpts = ({head, detale}) => {
  return (
    <div className='gpt'>
        <div className="top">
            <div className="line"></div>
            <h4>{head}</h4>
        </div>
        <div className="detale">
            {detale}      
        </div>

    </div>
  )
}

export default Gpts