import React from 'react'
import img from '../images/57f11bfb-f6d0-f28f-4ffc-7274b96c5ef2.jpg';
import '../styles/Seven/Seven.css';

function Seven() {
  return (
    <div className='seven'>
      <div className='seven-inner'>
        <h2 className='header'>Keeping & Storing</h2>
        <h5 className='sub-header'>Adipiscing bibendum est ultricies integer quis auctor elit. Eget nunc scelerisque viverra mauris in. Volutpat est velit egestas dui id. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nulla pharetra diam sit amet nisl. Lorem ipsum dolor sit amet consectetur adipiscing elit. Tempus quam pellentesque nec nam aliquam sem et. Nunc</h5>
        <img src={img} alt="image" className='img'/>
      </div>
    </div>
  )
}

export default Seven
