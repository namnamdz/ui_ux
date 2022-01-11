import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='footer'>
            <hr style={{width:"100%"}}/>
            <div className="footer-top">
                <div className="footer__top-item aboutUs">
                    <h4>About Us</h4>
                    <ul className='about_item'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div className="footer__top-item payment">
                    <h4>Payment</h4>
                    <div className='payment'>
                        <div className='payment__item'></div>
                        <div className='payment__item'></div>
                        <div className='payment__item'></div>
                        <div className='payment__item'></div>
                        <div className='payment__item'></div>
                        <div className='payment__item'></div>
                        <div className='payment__item'></div>
                    </div>
                </div>
                <div className="footer__top-item contactUs">   
                   <h4>Contact Us</h4>
                   <ul className='about_item'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>

                </div>
                <div className="footer__top-item support">
                    <h4>Support</h4>
                    <ul className='about_item'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
            <hr style={{width:"100%"}}/>
            <div className="footer-bottom">
                <div>
                <h4 style={{marginTop:"2.25rem"}}>Lorem ipsum dolor sit amet</h4>
                    <ul className='about_item'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div></div>              
            </div>
        </div>
    )
}

export default Footer
