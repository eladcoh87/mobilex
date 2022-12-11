import React from 'react'
import MainButton from '../Utiles/MainButton'
import './HeroSection.css'




const HeroSection = () => {


  return (

    <div className="hero-section">

      <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />

      <div className="centered">
        <h5>BACK IN STOCK!</h5>
        <p>Look who's back. We made more of your favorite sustainable tops, shoes, bottoms and bodysuits.</p>


        <MainButton className="btn123" text='NEW ARRIVAL' />
      </div>
</div>

    
  )
}

export default HeroSection