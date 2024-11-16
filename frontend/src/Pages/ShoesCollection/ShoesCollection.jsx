import React from 'react'
import './ShoesCollection.css'
import ShoeBanner1 from '../../components/ShoeBanner1/ShoeBanner1'
import ShoesCard1 from '../../components/ShoesCard1/ShoesCard1'
import ShoesCard2 from '../../components/ShoesCard2/ShoesCard2'
import ShoeBanner2 from '../../components/ShoeBanner2/ShoeBanner2'
import Footer from '../../components/Footer/Footer'
const ShoesCollection = () => {
  return (
    <div>
      <ShoeBanner1/>
      <ShoesCard1/>
      <ShoesCard2/>
      <ShoeBanner2/>
      <Footer/>
    </div>
  )
}

export default ShoesCollection