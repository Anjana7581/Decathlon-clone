import React from 'react'
import './FFrame.css'
import { assets } from '../../assets/assets'
const FFrame = () => {
  return (
    <div className='fframe'>
        <h3>Outdoor Essentials</h3>
        <div className="images">
        <img src={assets.frame1} alt="frame1" />
        <img src={assets.frame2} alt="frame2" />
        <img src={assets.frame3} alt="frame3" />
        <img src={assets.frame4} alt="frame4" />

  
        </div>
    </div>
  )
}

export default FFrame