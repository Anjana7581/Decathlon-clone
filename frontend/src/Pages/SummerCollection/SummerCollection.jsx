import React from 'react';
import './SummerCollection.css'
import SummerBanner1 from '../../components/SummerBanner1/SummerBanner1';
import Card2 from '../../components/Card2/Card2';
import SummerFrame from '../../components/SummerFrame/SummerFrame';
import SummerBanner2 from '../../components/SummerBanner2/SummerBanner2';
import Card4 from '../../components/Card4/Card4';
import Footer from '../../components/Footer/Footer';

const SummerCollection = () => {
  return (
    <div>
      <SummerBanner1/>
      <Card2/>
      <SummerFrame/>
      <SummerBanner2/>
      <Card4/>
      <Footer/>
    </div>
  );
};

export default SummerCollection;
