import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets";
import DeliveryLocation from '../Location/DeliveryLocation'; 
import "../Navbar/Navbar.css";
import { GoPerson } from "react-icons/go";
import { MdOutlineStore } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { VscHeart } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import MenuContent from '../MenuContent/MenuContent';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [deliveryLocation, setDeliveryLocation] = useState('');
    const [showDeliveryLocation, setShowDeliveryLocation] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    const toggleDeliveryLocation = () => {
        setShowDeliveryLocation(!showDeliveryLocation);
    };

    const closeDeliveryLocation = () => {
        setShowDeliveryLocation(false);
    };

    return (
        <div className='navbar'>
            <div className="menu-icon-text" onClick={toggleMenu}>
                <div className="menu-icon">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className='text'>ALL<br />SPORTS</div>
            </div>
                {isOpen && (
                    <MenuContent isOpen={isOpen} />
                )}

            <div className='logo'>
                <a href='/'>
                    <img src={assets.Logo} alt="Logo" />
                </a>
            </div>

            <div className='btn'>
                <button className='button-signin'>Sign in</button>
            </div>

            <div className='search-box-container'>
                <div className='search-box'>
                    <input 
                        type="text" 
                        placeholder="Search For" 
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

            <div className='del-location'>
                Delivery Location
                <div 
                    className='location' 
                    onClick={toggleDeliveryLocation}
                    style={{ color: 'blue', fontSize: '12px', paddingLeft: '50px', textDecoration: 'underline' }}
                >
                    CHANGE
                </div>
            </div>

            <ul className='nav-links'>
                <li><Link to="/signin"><GoPerson className='icon' /><br />Sign In</Link></li>
                <li><Link to="/mystore"><MdOutlineStore className='icon' /><br />My Store</Link></li>
                <li><Link to="/support"><TiMessage className='icon' /><br />Support</Link></li>
                <li><Link to="/wishlist"><VscHeart className='icon' /><br />Wishlist</Link></li>
                <li><Link to="/cart"><FiShoppingCart className='cart-icon' /><br />Cart</Link></li>
            </ul>

            {showDeliveryLocation && (
                <DeliveryLocation 
                    onClose={closeDeliveryLocation} 
                    deliveryLocation={deliveryLocation} 
                    setDeliveryLocation={setDeliveryLocation} 
                />
            )}
        </div>
    );
};

export default Navbar;
