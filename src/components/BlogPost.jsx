import React from 'react'
import '../styles/BlogPost.scss'


const BlogPost = ({img, name}) => {
  return (
        <div className='blogpost'>
            <img src={img} className='blogpic' alt="" />
            <div className="writeup">
                <p>Sep 26, 2022</p>
                <div className="bot">
                    <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
                    <p className='buttom'>Read Full Article</p>
                </div>
            </div>
        </div>
  )
}

export default BlogPost