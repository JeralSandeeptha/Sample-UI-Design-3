import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Two/Two.css';
import logo from '../images/4293088.png';

function Two() {
  return (
    <div className='two'>
      <div className='two-inner'>
        <div className='content'>
            <div className='box'>
                <img src={logo} alt="logo" />
                <h3>Bread</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
                <Link className='link' to='/about'>leran more</Link>
            </div>
            <div className='box'>
                <img src={logo} alt="logo" />
                <h3>Bread</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
                <Link className='link' to='/about'>leran more</Link>
            </div>
            <div className='box'>
                <img src={logo} alt="logo" />
                <h3>Bread</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
                <Link className='link' to='/about'>leran more</Link>
            </div>
            <div className='box'>
                <img src={logo} alt="logo" />
                <h3>Bread</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h5>
                <Link className='link' to='/about'>leran more</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Two
