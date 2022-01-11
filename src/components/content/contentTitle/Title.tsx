import React from 'react'
import CardContent from './cardContent/CardContent'
// import CardContent from './cardContent/CardContent'

import './index.css'
function Title() {
    return (
        <div className='content-title'>
            <div className='title'>
                Lorem ipsum dolor sit amet
            </div>
            <div className='decs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ph
                asellus porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit. N
                ulla imperdiet molestie nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum in.
            </div>
            <CardContent />
        </div>
    )
}

export default Title
