import React from 'react'
import './header.css'

// import people from '../../assets/people.png'
import ignitor from '../../assets/ignitor_product.png'

const Header = () => {

  return (
    <div className='ignitor__header section__padding' id='home'>
      <div className='ignitor__header-content'>
        <h1>Ignitor</h1>
        <p>An AI-powered educational platform, that demystifies complex concepts of fixed annuities and empower users to make informed decisions about their retirement investments.  </p>
        <h3>Watch Demo Video</h3>
        <form 
            method="POST"
            action="https://api.sheetmonkey.io/form/7t11Lh11yAMnd5g6GF1Xan"
          >
          <div className='ignitor__header-content__input'>
            <input name="Email" type="email" placeholder="Your Email Address" required />
            <button type='submit' >Sign Up</button>
          </div>
        </form>

        
      </div>

      <div className="ignitor__header-image">
        <img src={ignitor} alt="ignitor" />
      </div>
    </div>
  )
}

export default Header;