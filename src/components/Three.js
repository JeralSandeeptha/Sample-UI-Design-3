import React from 'react'
import '../styles/Three/Three.css';
import '../styles/Three/Three.css';
import logo from '../images/80fd24bc-f01b-aac5-2941-18f4ec01acbf.jpg';

function Three() {
  return (
    <div className="three">
      <div className="three-inner">
        <div className='title'>
          <h2 className='head'>Bakery Items</h2>
          <h5 className='sub-head'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</h5>
        </div>
        <div className='items'>
          <div className='box'>
            <img src={logo} alt="food" />
            <h3 className='name'>BAGUETTE</h3>
            <h5 className='description'>Small-batch sourdough baguette.</h5>
            <h3 className='price'>$4.5</h3>
          </div>
          <div className='box'>
            <img src={logo} alt="food" />
            <h3 className='name'>BAGUETTE</h3>
            <h5 className='description'>Small-batch sourdough baguette.</h5>
            <h3 className='price'>$4.5</h3>
          </div>
          <div className='box'>
            <img src={logo} alt="food" />
            <h3 className='name'>BAGUETTE</h3>
            <h5 className='description'>Small-batch sourdough baguette.</h5>
            <h3 className='price'>$4.5</h3>
          </div>
          <div className='box'>
            <img src={logo} alt="food" />
            <h3 className='name'>BAGUETTE</h3>
            <h5 className='description'>Small-batch sourdough baguette.</h5>
            <h3 className='price'>$4.5</h3>
          </div>
          <div className='box'>
            <img src={logo} alt="food" />
            <h3 className='name'>BAGUETTE</h3>
            <h5 className='description'>Small-batch sourdough baguette.</h5>
            <h3 className='price'>$4.5</h3>
          </div>
          <div className='box'>
            <img src={logo} alt="food" />
            <h3 className='name'>BAGUETTE</h3>
            <h5 className='description'>Small-batch sourdough baguette.</h5>
            <h3 className='price'>$4.5</h3>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Three
