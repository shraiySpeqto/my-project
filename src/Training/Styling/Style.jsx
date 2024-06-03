import React from 'react'
import './Style.css';
import whatsapp from "./images/whatsapp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Style = () => {
  return (
    <>
       
   <div>
    <header className='header wrapper'>
        <div className='inner_wrapper'>
            <div className='top_section ' >
                <div className='d-flex top_section_inner'>
                    <div className='contact_wp'>
                        <img src={whatsapp} className='wp_image' alt="image" />
                        <p className='num'>7987920299</p>
                    </div>
                    <div className='top_text'>
                        Free Shipping all over India
                    </div>
                </div>
            </div>
            <div className='main_section'>
                <div className='main_top'>
                    <div className='logo_text'>MACHO MODE</div>
                    <div className='navigation'>
                        <div>
                            
                          <input type='text'/>
                        </div>
                        <nav>
                            <ul className='list-unstyled'>
                                <li>
                                <i class="fa-regular fa-user"></i>  
                                <p>Account</p>                            
                               </li>
                                <li>
                                <i class="fa-regular fa-heart"></i>
                                <p>Wishlist</p>
                                </li>
                                <li>
                                <i class="fa-solid fa-cart-shopping"></i>                            
                                <p>Cart</p>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
                <div className='main_bottom'>
                    <div className='links'>
                        <ul className='list-unstyled'>
                            <li>Shop</li>
                            <li>Best Seller</li>
                            <li>Brands</li>
                            <li>New Arrival</li>
                            <li>Categories</li>
                            <li>Special Offers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
   </div>

    </>
  )
}

export default Style