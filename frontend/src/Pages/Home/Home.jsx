import React from 'react'
import "./Home.css"
import Card1 from '../../components/Card1/Card1'
import Banner1 from '../../components/Banner1/Banner1'
import Feature from '../../components/Feature/Feature'
import Banner2 from '../../components/Banner2/Banner2'
import Card2 from '../../components/Card2/Card2'
import Banner3 from '../../components/Banner3/Banner3'
import Card3 from '../../components/Card3/Card3'
import Banner4 from '../../components/Banner4/Banner4'
import FFrame from '../../components/FFrame/FFrame'
import Card4 from '../../components/Card4/Card4'
import SportCollection from '../../components/SportCollection/SportCollection'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Card1/>
      <Banner1/>
      <Feature/>
      <Banner2/>
      <Card2/>
      <Banner3/>
      <Card3/>
      <Banner4/>
      <FFrame/>
      <Card4/>
      <SportCollection/>
      <Footer/>
    </div>
  )
}

export default Home