import React, { useState } from 'react';
import './LoginForm.css'; // Create a separate CSS file for login form styles
import { assets } from '../../assets/assets';

const LoginForm = ({ toggleCreateAccount }) => {
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [touched, setTouched] = useState(false);


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

  const validateEmail = (value) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    setIsValidEmail(isValid);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateEmail(value);
  };
  
  const handleBlur = () => {
    setTouched(true);
  };

  


  return (
    <>
      <div className="log-in">
        <h1>Login</h1>
        <h5>Go to your DECATHLON account here.</h5>
      </div>
      <div className="form-signin">
        <div className="toggle-buttons">
          <span className={showEmail ? 'active' : ''} onClick={toggleEmail}>
            Email
          </span>
          <span className={showPhone ? 'active' : ''} onClick={togglePhone}>
            Phone Number
          </span>
        </div>
        <div className="input-container">
          <div className={`email ${touched && isValidEmail ? 'valid' : ''} ${touched && !isValidEmail ? 'invalid' : ''}`} style={{ display: showEmail ? 'block' : 'none' }}>
            <p className='email-p'>Enter an email address</p>
            <div className="email-input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className={`valid-feedback ${isValidEmail ? 'show' : ''}`}>&#10004;</span>
            </div>
            {!isValidEmail && touched && (
              <div className="invalid-feedback">
                <span>&#x26A0; Invalid email format</span>
              </div>
            )}
            <button className='btn' >Next</button>
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
            <button className='btn'>Next</button>
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 0 0 0' }}>Social Login</div>
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
      <h5 style={{ padding: '15px 0' }}>No account? Create one!</h5>
      <div className="create-ac" style={{ padding: '15px 0', cursor: 'pointer' }} onClick={toggleCreateAccount}>
        Create your DECATHLON account<hr className='hrline' />
      </div>
      <div style={{ padding: '15px 0', cursor: 'pointer' }}>Having trouble logging in? Privacy</div>
    </>
  );
};

export default LoginForm;
