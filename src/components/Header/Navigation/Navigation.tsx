import React from 'react'
import SearchIcon from '../../../assets/icons/Vector.png';
import UserIcon from '../../../assets/icons/user.png';
import Cart from '../../../assets/icons/cart.png';
import './index.css';
function Navigation() {
    return (
        <>
                <div className='navigation'>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Menu</li>
                    <li className='nav-item'>About Us</li>
                    <li className='nav-item nav-item__oder'>Oder Now</li>
                </ul>
            </nav>
            <div className='oderBox'>
                <div className='searchBox'>
                    <input
                        className='searchInput' 
                        type="text"
                        placeholder='Seacrh'
                    />
                    <img src={SearchIcon} alt='search' className='searchIcon' />
                </div>
                    <ul className='nav-list--user'>
                        <li className=' nav-item__user' >
                            <img src={UserIcon} alt='search' className='UserIcon' />
                            
                        </li>
                        <li className='nav-item-box'>
                            <span>Account</span>
                        </li>
                        <li className=' nav-item__user cart' >
                            <img src={Cart} alt='search' className='CartIcon' />
                            <div className='numberOfCart'>1</div>
                        </li>
                    </ul>
            </div>
        </div>
        <hr style={{width:"100%"}} />
        </>

        
    )
}

export default Navigation
