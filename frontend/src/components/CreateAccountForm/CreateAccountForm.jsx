import React, { useState } from 'react';
import './CreateAccountForm.css'; // Create a separate CSS file for create account form styles
import { assets } from '../../assets/assets';

const CreateAccountForm = ({ goToSignin }) => {
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleEmail = () => {
    setShowEmail(true);
    setShowPhone(false);
  };

  const togglePhone = () => {
    setShowEmail(false);
    setShowPhone(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="log-in">
        <h1>Let's go!</h1>
        <h5>Create an account once and log all Decathlon sites and partners in<br/> one click!</h5>
      </div>
      <div className="form-signin">
        <div className="toggle-buttons">
          <span className={showEmail ? 'active' : ''} onClick={toggleEmail}>
            E-mail
          </span>
          <span className={showPhone ? 'active' : ''} onClick={togglePhone}>
            Phone Number
          </span>
        </div>
        <div className="input-container">
          <div className="email" style={{ display: showEmail ? 'block' : 'none' }}>
            <p className='email-p'>Enter an email address</p>
            <input type="email" placeholder="Email" />
          </div>
          <div className="phonenum" style={{ display: showPhone ? 'block' : 'none' }}>
            <div className="container">
              <span className="text1">Country :</span>
              <span className="text2">Mobile phone number</span>
            </div>
            <div className="phone-input-container">
              <div className="dropdown" onClick={toggleDropdown}>
                <img src={assets.Flag} alt="India Flag" className="flag" />
                <span>+91</span>
                <span className="arrow">{dropdownOpen ? '▲' : '▼'}</span>
              </div>
              <input type="tel" placeholder="Phone number" className="phone-input" />
            </div>
            {dropdownOpen && (
              <div className="dropdown-options">
                <div className="dropdown-option">
                  <img src={assets.Flag} alt="India Flag" className="flag" />
                  <span>+91</span>
                </div>
              </div>
            )}
          </div>
          {/* <div className="password">
            <p>Enter a password</p>
            <input type="password" placeholder="Password" />
          </div> */}
          <button className="btn">NEXT</button>
        </div>
      </div>
      <div style={{ padding: '20px 0 0 0' }}>Social Signup</div>
      <div className="social">
        <div className="google">
          <img src={assets.google} alt="Google" />
        </div>
        <div className="fbk">
          <img src={assets.facebook} alt="Facebook" />
        </div>
        <div className="aple">
          <img src={assets.apple} alt="Apple" />
        </div>
      </div>
      <h5 style={{ padding: '15px 0' }}>Already have an account? </h5>
      <div className="create-ac" style={{ padding: '15px 0', cursor: 'pointer' }} onClick={goToSignin}>
         Login<hr />
      </div>
      <div  style={{ padding: '50px 0 0 0', cursor: 'pointer' }}>Having trouble creating an account? Privacy</div>
    </>
  );
};

export default CreateAccountForm;
