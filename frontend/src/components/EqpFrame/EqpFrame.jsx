import React from 'react'
import './EqpFrame.css'
import { assets } from '../../assets/assets'
const EqpFrame = () => {
  return (
    <div className='fframe'>
        <h3>Outdoor Essentials</h3>
        <div className="images">
        <img src={assets.Eqpf1} alt="Eqpf1" />
        <img src={assets.Eqpf2} alt="Eqpf2" />
        <img src={assets.Eqpf3} alt="Eqpf3" />
        <img src={assets.Eqpf4} alt="Eqpf4" />

  
        </div>
    </div>
  )
}

export default EqpFrame