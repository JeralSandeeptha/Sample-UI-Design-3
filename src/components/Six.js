import React from 'react'
import img1 from '../images/80fd24bc-f01b-aac5-2941-18f4ec01acbf.jpg';
import img2 from '../images/aaa90fbe-1b90-3607-4d63-f1658876c83f.jpg';
import img3 from '../images/55.jpg';
import img4 from '../images/trt.jpg';
import gsap from 'gsap';
import '../styles/Six/Six.css';
import CloseIcon from '@mui/icons-material/Close';

function Six() {

  //for img 1
  const imgCloseOne = () => {
    let tl = gsap.timeline();
    tl.to('.bg1', {duration: 1, x: '-100%', ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  const imgOpenOne = () => {
    let tl = gsap.timeline();
    tl.to('.bg1', {duration: 1, x: 0, ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  //for img 2
  const imgOpenTwo = () => {
    let tl = gsap.timeline();
    tl.to('.bg2', {duration: 1, x: 0, ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  const imgCloseTwo = () => {
    let tl = gsap.timeline();
    tl.to('.bg2', {duration: 1, x: '-100%', ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  //for img 3
  const imgOpenThree = () => {
    let tl = gsap.timeline();
    tl.to('.bg3', {duration: 1, x: 0, ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  const imgCloseThree = () => {
    let tl = gsap.timeline();
    tl.to('.bg3', {duration: 1, x: '-100%', ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  //for img 4
  const imgOpenFour = () => {
    let tl = gsap.timeline();
    tl.to('.bg4', {duration: 1, x: 0, ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  const imgCloseFour = () => {
    let tl = gsap.timeline();
    tl.to('.bg4', {duration: 1, x: '-100%', ease: "elastic.out(1, 0.3)"});
    tl.play(0, true);
  }

  return (
    <div className='six'>
      <div className='six-inner'>
        <div className='img box1' onClick={imgOpenOne}></div>
        <div className='img box2' onClick={imgOpenTwo}></div>
        <div className='img box3' onClick={imgOpenThree}></div>
        <div className='img box4' onClick={imgOpenFour}></div>

        <div className='bg1'>
          <CloseIcon onClick={imgCloseOne} fontSize='large' className='close'/>
          <img src={img1} alt="image" className='box box5'/>
        </div>
        <div className='bg2'>
          <CloseIcon onClick={imgCloseTwo} fontSize='large' className='close'/>
          <img src={img2} alt="image" className='box box6'/>
        </div>
        <div className='bg3'>
          <CloseIcon onClick={imgCloseThree} fontSize='large' className='close'/>
          <img src={img3} alt="image" className='box box7'/>
        </div>
        <div className='bg4'>
          <CloseIcon onClick={imgCloseFour} fontSize='large' className='close'/>
          <img src={img4} alt="image" className='box box8'/>
        </div>

      </div>
    </div>
  )
}

export default Six
