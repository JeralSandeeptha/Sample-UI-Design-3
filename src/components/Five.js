import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/ds-min.jpg';
import img2 from '../images/ghhg.jpg';
import '../styles/Five/Five.css';

function Five() {
  return (
    <div className='five'>
      <div className='five-inner'>
        <div className='box'>
            <img src={img1} alt="image" />
            <h3>OUR STORY</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
            <Link to='/' className='link'>LEARN MORE</Link>
        </div>
        <div className='box'>
            <img src={img2} alt="image" />
            <h3>OUR BREAD</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
            <Link to='/' className='link'>LEARN MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default Five
