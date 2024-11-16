import React from 'react'
import "./Mystore.css"
import { assets } from '../../assets/assets'
import Mybanner from '../../components/Mystore-banner/Mybanner'
import Footer from '../../components/Footer/Footer'
const Mystore = () => {
  return (
    <div className='mystore'>
      <div className="head">
      <h1>FIND A DECATHLON SPORTS STORE NEAR YOU</h1>
      </div>
      <div className="location-map-wrapper">
      <div className="location-map">
        <img src={assets.Indiamap} alt="Indiamap" />
      </div>
      </div>
      <div className="search-location">
        <h1>Search Location</h1>
      </div>
      <div className="mybanner">
        <h2>Multibuy Banner</h2>
        <div className='multi-banner'>
          <Mybanner/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Mystore