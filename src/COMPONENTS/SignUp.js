import React from 'react'
import './signUp.css'
import Crypto from '../ASSETS/trade.png'
const SignUp = () => {


  return (
    <div className='signUp'>
        <div className='container'>
             {/* left*/}
        <div className='left'>
            <img src={Crypto} alt=""></img>
        </div>
           {/* right*/}
        <div>
            <h2>Earn passive income with crypto.</h2>
            <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app automatically earn rewards at the end of each month with no limits. </p>
            <div>
                <input type='email' placeholder='Enter your email'></input>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SignUp