import React from 'react'
import './MenCollection.css'
import MenBanner1 from '../../components/MenBanner1/MenBanner1'
import MenCard1 from '../../components/MenCard1/MenCard1'
import MenBanner2 from '../../components/MenBanner2/MenBanner2'
import Card4 from '../../components/Card4/Card4'
import Footer from '../../components/Footer/Footer'

const MenCollection = () => {
  return (
    <div>
      <MenBanner1/>
      <MenCard1/>
      <MenBanner2/>
      <Card4/>
      <Footer/>
    </div>
  )
}

export default MenCollection