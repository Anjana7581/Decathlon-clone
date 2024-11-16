import React, { useState } from 'react';
import './Signin.css';
import { assets } from '../../assets/assets';
import { PiArrowFatUpBold } from 'react-icons/pi';
import LoginForm from '../../components/LoginForm/LoginForm';
import CreateAccountForm from '../../components/CreateAccountForm/CreateAccountForm';

const Signin = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const toggleCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const goToSignin = () => {
    setShowCreateAccount(false);
  };

  return (
    <div className="signin">
      <div className="head">
        <div className="back-icon" style={{ display: 'flex' }}>
          <a href="/">
            <PiArrowFatUpBold />
          </a>
          <div className="b-text" style={{ fontSize: '15px', padding: '10px' }}>
            <a href="/">Back</a>
          </div>
        </div>
        <div className="signin-logo">
          <img src={assets.Logo} alt="Logo" />
        </div>
      </div>

      <div className="signin-container">
        <div className="signinimg">
          <img src={assets.imgsignin} alt="imgsignin" />
        </div>
        <div className="login-container">
          <div className="login-scroll">
            {showCreateAccount ? (
              <CreateAccountForm goToSignin={goToSignin} />
            ) : (
              <LoginForm toggleCreateAccount={toggleCreateAccount} />
            )}
            <div style={{ display: "flex", gap: '5px', marginTop: '30px' }}>
              <img src={assets.Flag} style={{ width: '30px' }} alt="Flag" />
              English
            </div>
            <footer className='foot'>This site is protected by reCaptcha. Google Privacy Policy applies as well as their terms<br /> of service</footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
