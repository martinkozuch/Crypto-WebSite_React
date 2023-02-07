import React from 'react'
import Crypto from '../ASSETS/hero-img.png'
import './hero.css'

const Hero = () => {

  return (
    <div className='hero'>
        <div className='container'>
            {/* LEFT SIDE  */}
            <div className='left'>
                <p>Buy and Sell Crypto 24/7 using your retirement account</p>
                <h1>Incest in Cryptocurreny with Your IRA</h1>
                <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter Your Email'></input>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
                <div>
                    <img className='crypto' src={Crypto} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero