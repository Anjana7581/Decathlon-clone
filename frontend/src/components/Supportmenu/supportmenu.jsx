import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './supportmenu.css';

const Supportmenu = ({ isOpen, toggleMenu }) => {
  return (
    isOpen && (
      <div className='s-menu'>
        <h1>
          Decathlon Support 
          <FaTimes onClick={toggleMenu} style={{ cursor: 'pointer', marginLeft: '10px' }} />
        </h1>
        <ul className="supportmenu-list" >
          <li>My Stores</li>
          <li>Services & Installation</li>
          <li>Warranty Policy</li>
          <li>Return Policy</li>
        </ul>
      </div>
    )
  );
};

export default Supportmenu;
