import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hero/Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-inner'>
        <div className='content'>
            <h1>Bakery</h1>
            <h5>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque pulvinar pellentesque.</h5>
            <Link to='/about' className='link'>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
