import React from 'react'
import Content from '../components/content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './home.css'
function Home() {
    return (
        <div className='home'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Home
