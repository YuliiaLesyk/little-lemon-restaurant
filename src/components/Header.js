import React from 'react';
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className='header'>
     <section>

       {/*baner text*/}
       <div className='banner'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>The finest culinary creations with a touch of lemony goodness. Our chefs are dedicated to bringing you the best flavors with fresh, high-quality ingredients.</p>
       < Link to ="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
       </div>

       {/*banner img*/}
       <div className='banner-img'>
        <img src={bannerImg} alt=''/>
       </div>

     </section>
    </header>
  );
}

export default Header;