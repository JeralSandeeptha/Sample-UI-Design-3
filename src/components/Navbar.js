import React from 'react';
import logo from '../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {NavLink} from 'react-router-dom';
import gsap from 'gsap';
import '../styles/Navbar/Navbar.css';

function Navbar() {

    const navClose = () => {
        let tl = gsap.timeline();
        tl.to('.nav-links', {duration: 1, x: '-100%', ease: "elastic.out(1, 0.3)"});
        tl.play(0, true);
    }

    const navOpen = () => {
        let tl = gsap.timeline();
        tl.to('.nav-links', {duration: 1, x: 0, ease: "elastic.out(1, 0.3)"});
        tl.play(0, true);
    }

  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <img src={logo} alt="logo" />
        <div className='nav-links'>
            <CloseIcon fontSize='large' onClick={navClose} className='close'/>
            <NavLink className='link' to='/'><h5>HOME</h5></NavLink>
            <NavLink className='link' to='/about'><h5>ABOUT</h5></NavLink>
            <NavLink className='link' to='/contact'><h5>CONTACT</h5></NavLink>
        </div>
        <MenuIcon fontSize='large' onClick={navOpen} className='menu'/>
      </div>
    </div>
  )
}

export default Navbar
