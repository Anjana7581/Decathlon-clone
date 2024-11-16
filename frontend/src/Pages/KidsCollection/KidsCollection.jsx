import React from 'react'
import './KidsCollection.css'
import KidBanner from '../../components/KidBanner/KidBanner'
import KidCard1 from '../../components/KidCard/KidCard1'
import KidsBanner2 from '../../components/KidsBanner2/KidsBanner2'
import Footer from '../../components/Footer/Footer'

const KidsCollection = () => {
  return (
    <div>
      <KidBanner/>
      <KidCard1/>
      <KidsBanner2/>
      <Footer/>
    </div>
  )
}

export default KidsCollection