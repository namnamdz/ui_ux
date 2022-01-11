import React from 'react'
import Card from './card/Card'
import Title from './contentTitle/Title'
import './index.css'
function Content() {
    return (
        <>
           <Title />
           <div className='content-title'>
                <div className='title'>
                    Lorem ipsum dolor sit amet
                </div>
                <div className='decs'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ph
                    asellus porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit. N
                    ulla imperdiet molestie nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum in.
                </div>
                <div className='product'>
                <Card isLarge ={false}/>
                <Card isLarge ={false}/>
                <Card isLarge ={false}/>
                <Card isLarge ={false}/>
                </div>
            </div>
            <div className='content-title'>
                <div className='title'>
                    Lorem ipsum dolor sit amet
                </div>
                <div className='decs'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ph
                    asellus porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit. N
                    ulla imperdiet molestie nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum in.
                </div>
                <div className='product'>
                <Card isLarge />
                <Card isLarge />
                <Card isLarge />
                </div>
            </div>
            
        </>
    )
}

export default Content
