import React from 'react'
import '../styles/Blog.scss'
import BlogPost from './BlogPost'
import blog1 from '../assets/blog01.png'
import blog2 from '../assets/blog02.png'
import blog3 from '../assets/blog03.png'
import blog4 from '../assets/blog04.png'
import blog5 from '../assets/blog05.png'
import { motion, Variants } from 'framer-motion'


const move={
  offscreen:{x: -60,opacity: 0,display: 'none'},
 onscreen:{ x: 0,opacity: 1, display: 'block', transition: { duration: 1, type: 'spring'}}
}

const moveL={
  offscreen:{x: 30,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, type: 'spring'}}
}


const Blog = () => {
  return (
    <motion.div className='blog'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{once:false, amount:0.6}}
    transition={{staggerChildren:0.5}}
    >
        <motion.h1 className='gradient__text '
          variants={move}
        >A lot is happening, 
            <br /> We are blogging about it.
        </motion.h1>
        <motion.div className="blogdet"
          variants={moveL}
        >
            <BlogPost img={blog1} className='blog1' name={blog1}/>
            <div className="blogGrid">
                <BlogPost img={blog2} className='blog2' name={blog2}/>
                <BlogPost img={blog3}  className='blog3' name={blog3}/>
                <BlogPost img={blog4} className='blog4' name={blog4}/>
                <BlogPost img={blog5} className='blog5' name={blog5}/>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Blog