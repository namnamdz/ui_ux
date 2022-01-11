import React from 'react'
import './card.css'
interface Cards {
    isLarge: boolean;
}
function Card(props:Cards) {
    const isLargeElement =  props.isLarge ? 'big' : 'small';
    return (
        <div className={isLargeElement}>
            <img
                src='https://monngonchuabenh.com/wp-content/uploads/2019/01/bun-dau-mam-tom-thom-ngon.jpg'
                alt='img'
                className={`${props.isLarge ? 'big-img' : 'small-img'}`}/>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> 
    )
}

export default Card
