import React from 'react'
import '../styles/Feature.scss'
import FeatureDet from './FeatureDet'

const Feature = () => {
  return (
    <div className='feature'>
      <div className="first">
          <h2 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
          <p className='gradient__text first-text'>Request Early Access to Get Started</p>
      </div>
      <div className="second">
          <FeatureDet 
            className='secondFeat'
            subject='Improving end distrusts instantly'
            info='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
          />
          <FeatureDet
            className='secondFeat'
            subject='Become the tended active'
            info='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
          />
          <FeatureDet 
            className='secondFeat'
            subject='Message or am nothing'
            info='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
          />
          <FeatureDet 
            className='secondFeat'
            subject='Really boy law county'
            info='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
          />
      </div>
    </div>
  )
}

export default Feature