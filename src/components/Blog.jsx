import React from 'react'
import '../styles/Blog.scss'
import BlogPost from './BlogPost'
import blog1 from '../assets/blog01.png'
import blog2 from '../assets/blog02.png'
import blog3 from '../assets/blog03.png'
import blog4 from '../assets/blog04.png'
import blog5 from '../assets/blog05.png'


const Blog = () => {
  return (
    <div className='blog'>
        <h1 className='gradient__text '>A lot is happening, 
            <br /> We are blogging about it.
        </h1>
        <div className="blogdet">
            <BlogPost img={blog1} className='blog1' name={blog1}/>
            <div className="blogGrid">
                <BlogPost img={blog2} className='blog2' name={blog2}/>
                <BlogPost img={blog3}  className='blog3' name={blog3}/>
                <BlogPost img={blog4} className='blog4' name={blog4}/>
                <BlogPost img={blog5} className='blog5' name={blog5}/>
            </div>
        </div>
    </div>
  )
}

export default Blog