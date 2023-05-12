import React from 'react'
import './header.css'

// import people from '../../assets/people.png'
import fire from '../../assets/fire.png'



const Header = () => {

  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Start Your FIRE Journey With AInsurMe.com</h1>
        <p>Financial Independence, Retire Early (FIRE). Stop dreaming about it, do it!</p>
        <form 
            method="POST"
            action="https://api.sheetmonkey.io/form/7t11Lh11yAMnd5g6GF1Xan"
          >
          <div className='gpt3__header-content__input'>
            <label>Email</label>
            <input name="Email" type="email" placeholder="Your Email Address" required />
            <button type='submit' >Request Access</button>
          </div>
        </form>

        {/* <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>

      <div className="gpt3__header-image">
        <img src={fire} alt="ai-face" />
      </div>
    </div>
  )
}

export default Header