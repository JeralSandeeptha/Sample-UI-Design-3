import React from 'react'
import '../styles/Eight/Eight.css';

function Eight() {
  return (
    <div className='eight'>
      <div className='eight-inner'>
        <div className='content'>
            <div className='left'>
                <h2>Hours & Location</h2>
                <h3>14 E 12th St, <br/> New York, NY 10007 <br/> (123) 456-2253</h3>
                <h4>Monday - Sunday</h4>
                <h4>7:00am - 8:00pm</h4>
            </div>
            <div className='right'>
                <div className='item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="dot" />
                    <h4>In-store Dining</h4>
                </div>
                <div className='item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="dot" />
                    <h4>Outdoor Dining</h4>
                </div>
                <div className='item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="dot" />
                    <h4>Open Seating</h4>
                </div>
                <div className='item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="dot" />
                    <h4>Take Out Free Wifi</h4>
                </div>
                <div className='item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="dot" />
                    <h4>Delivery</h4>
                </div>
                <div className='item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="dot" />
                    <h4>ADA-Accessible</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eight
