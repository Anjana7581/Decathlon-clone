import React from 'react'
import './WomenCollection.css'
import WomenBanner1 from '../../components/WomwnBanner1/WomenBanner1'
import WomenCard1 from '../../components/WomenCard1/WomenCard1'
import WomenBanner2 from '../../components/WomenBanner2/WomenBanner2'
import Footer from '../../components/Footer/Footer'
const WomenCollection = () => {
  return (
    <div>
      <WomenBanner1/>
      <WomenCard1/>
      <WomenBanner2/>
      <Footer/>
    </div>
  )
}

export default WomenCollection