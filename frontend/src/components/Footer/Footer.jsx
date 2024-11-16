import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
   <footer className='footer-container'> 
   
    <div className='Home-Footer'>
      <div className="left-container">
        <div className="left-head">
          <h2 style={{ paddingTop: '30px' }}>
            OUR PROMISE
          </h2>
          <div className="f-emi">
            No Cost EMI Available
          </div>
          <div className="f-return">
            Easy Return
          </div>
          <div className="f-customer">
            1M+ happy Customers
          </div>
          </div>
          <div className="footer-list">
            <div className="fl-1">
              <ul>
                <h3> SUPPORT</h3>
                <li>Contact our Stores</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div className="fl-2">
              <ul>
                <h3>OUR SERVICES</h3>
                <li>Decathlon for Schools</li>
                <li>Decathlon for Corporates</li>
                <li>Decathlon for Sport Clubs</li>
                <li>Decathlon Gift Cards</li>
                <li>Installation & Assembly Services</li>
              </ul>
            </div>
            <div className="fl-3">
              <ul>
                <h3>ABOUT US</h3>
                <li>Who we are</li>
                <li>Careers</li>
                <li>Made In India</li>
              </ul>
            </div>
            <div className="fl-4">
              <ul>
                <h3>LEGAL</h3>
                <li>Return Policy</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        <hr/>
        <div className="ftr-tran">
            <div className="ftr-1">

            </div>
            <div className="ftr-2">
                <ul>
                <h2>100% SECURE TRANSACTION</h2>
                <li>Secure SSL encryption</li>
                </ul>
            </div>
            <div className="ftr-3" style={{ display:'flex'}}>
                <img src={assets.footerimg1} alt="footerimg1" />
                <img src={assets.footerimg2} alt="footerimg2" />
                <img src={assets.footerimg3} alt="footerimg3" />
                <img src={assets.footerimg4} alt="footerimg4" />

            </div>
            <div className="ftr-4" style={{ margin:'36px', fontSize :'17px', color:'rgb(113, 108, 108)'}}>
                |site Map| 
            </div>
            <div>
              DECATHLON is present in 
              <button style={{padding:'10px ', margin:'30px', borderRadius:'10px'}}>46 countries</button>
            </div>
        </div>
        <hr/>
      </div>
      <div className="right-container">
        <div className="right-head">
          <h3>EXPERIENCE DECATHLON APP ON MOBILE</h3>
          <div className="online-img">
          <img src={assets.googleplay} alt="googleplay" />
          <img src={assets.appstore} alt="appstore" />
          </div>
        </div>
        <div className="right-follows">
          <div className='rgt-1'>
         <h4>FOLLOW US</h4>
         <div className="online-site">
            <div className="site-1" >
              <img style={{width:'14px',paddingLeft:'5px'}} src={assets.facebookftr} alt="facebookftr" />
            </div>
            <div className="site-2">
              <img src={assets.twitterftr} alt="twitterftr" />
            </div>
            <div className="site-3">
              <img src={assets.instagramftr} alt="instagramftr" />
           </div>
           <div className="site-4">
           <img src={assets.youtubeftr} alt="youtubeftr" />
           </div>
         </div>
        </div>
         <div className="rgt-2">
         <h4>SPORT ADVICE FOR YOU</h4>
         <button style={{border:'none',width:'330px',height:'40px', margin:'20px 30px', backgroundColor:'white'}}>blog.decathlon.in</button>
         </div>
         <div className="rgt-3">
         <h4>EXPLORE SPORTS EVENTS NEAR YOU</h4>
         <button style={{border:'none',width:'330px',height:'40px', margin:'20px 30px', backgroundColor:'white'}}>play.decathlon.in</button>
         </div>

         
        </div>
       
      </div>
      
    </div>
          <div className="ftr-content">
                <p style={{ fontSize:'14px'}}>&copy; {new Date().getFullYear()}  Decathlon Sports India Pvt Ltd. All rights reserved.</p>
            </div>
  
    </footer>
  );
};

export default Footer;
