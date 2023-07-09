import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/One/One.css';

function One() {
  return (
    <div className='one'>
      <div className='one-inner'>
        <h2>The family-owned bakery</h2>
        <h5>We have been baking with organic grains since our first loaf in 1950, and we continue to do so today. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
        <Link className='link' to='/about'>OUR VALUES</Link>
      </div>
    </div>
  )
}

export default One
