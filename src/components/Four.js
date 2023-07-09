import React from 'react'
import  {Link} from 'react-router-dom';
import '../styles/Four/Four.css';

function Four() {
  return (
    <div className='four'>
        <div className='four-inner'>
            <h2>Organic breads</h2>
            <h5>Vitae turpis massa sed elementum tempus egestas sed sed. <br/> Blandit massa enim nec dui nunc mattis enim.</h5>
            <div className='btn-section'>
                <Link className='link' to='/about'>BAKERY</Link>
                <Link className='link' to='/about'>COOKIES</Link>
                <Link className='link' to='/about'>CAFE</Link>
                <Link className='link' to='/about'>CATERING</Link>
            </div>
        </div>  
    </div>
  )
}

export default Four
