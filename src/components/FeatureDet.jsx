import React from 'react'
import '../styles/FeatureDet.scss'

const FeatureDet = ({subject, info}) => {
  return (
    <div className='featDet'>
        <div className="featLeft">
            <div className="gradient__line"></div>
            <div className="subject">{subject}</div>
        </div>
        <div className="featRight">
            <p>{info}</p>
        </div>
    </div>
  )
}

export default FeatureDet