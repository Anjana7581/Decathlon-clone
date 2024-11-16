import React from 'react'
import './SummerFrame.css'
import { assets } from '../../assets/assets'
const SummerFrame = () => {
  return (
    <div className='fframe'>
        <h3>Outdoor Essentials</h3>
        <div className="images">
        <img src={assets.summerF1} alt="summerF1" />
        <img src={assets.summerF2} alt="summerF2" />
        <img src={assets.summerF3} alt="summerF3" />
        <img src={assets.summerF4} alt="summerF4" />

  
        </div>
    </div>
  )
}

export default SummerFrame