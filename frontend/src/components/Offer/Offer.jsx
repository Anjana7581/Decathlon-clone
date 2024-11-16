import React, { useState } from 'react';
import "../Offer/Offer.css";
import { FaTimes } from 'react-icons/fa';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className='offer'> 
          <p className='offer-one'>Enjoy ₹200/- Off on your first purchase.T&C apply</p>
          <p className='offer-two'>FREE delivery on orders worth 2999/- and above</p>
          <div className="offer-close-container">
            <FaTimes className="offer-close-icon" onClick={handleClose} />
          </div>           
        </div>
      )}
    </>
  );
};

export default Offer;
