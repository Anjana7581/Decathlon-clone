import React, { useState } from 'react';
import "./Support.css";
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { assets } from "../../assets/assets";
import Supportmenu from '../../components/Supportmenu/supportmenu';
import Supportcard from '../../components/Supportcard/Supportcard';


const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <div className='support-container'>
      <div className='navv'>
        <div className="menu-icon-text" onClick={toggleMenu}>
          <div className="menu-icon">
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {isOpen && (
         <Supportmenu isOpen={isOpen} toggleMenu={toggleMenu} />
         )}
        <div className='lo-go' >
          <a href='/'>
            <img src={assets.Logo} alt="Logo" />
          </a>
        </div>
        <ul className='navv-links'>
          <li>E-commerce</li>
          <li>Organisation</li>
          <li>Play</li>
        </ul>
      </div>
      <div className='search-container'>
        <div className='search-box'>
          <input 
            type="text" 
            placeholder="How can we help?" 
            className="search-input" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
          {inputValue && (
            <FaTimes className="close-icon" onClick={clearInput} />
          )}
          <FaSearch className="search-icon" />
        </div>
      </div>
      <Supportcard/>

      <footer className='support-footer'>
        <div className="support-copyright">
        <p style={{ fontSize:'14px'}}>&copy; {new Date().getFullYear()}  Decathlon.in.</p>
        </div>
        <div className="support-contact">
          <button style={{border:'1px solid ',width:'70px', height:"30px"}}>Contact us</button>
        </div>
        <div className='support-TC'>
      <p> Terms & Conditions | Privacy Policy</p>
        </div>

      </footer>
    </div>
  );
};

export default Support;
