import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Supportcard.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const Supportcard= () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(category.toLowerCase());
  
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="SUPPORT-card-container">
      {/* Render category cards */}
      <div className="category-cards-1 d-flex">
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.support1} alt="support1" className="card-img-top" />
        <div className="card-body">Return and Refund</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.support2} alt="support2" className="card-img-top" />
          <div className="card-body">Shipping and Delivery</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.support3} alt="support3" className="card-img-top" />
          <div className="card-body">Installation&services</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.support4} alt="support4" className="card-img-top" />
          <div className="card-body">Online Order</div>
        </div>
        </div>
      <div className="category-cards-2"> 
        <div className="card" onClick={() => handleCategorySelect('Summer Collection')}>
        <img src={assets.support5} alt="support5" className="card-img-top" />
          <div className="card-body">Replacement/Exchange</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sales')}>
        <img src={assets.support6} alt="support6" className="card-img-top" />
          <div className="card-body">Payment Method</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.support7} alt="support7" className="card-img-top" />
          <div className="card-body">Jobs</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.support8} alt="support8" className="card-img-top" />
          <div className="card-body">Corporate Queries</div>
        </div>
        </div> 
        <div className="category-cards-3">
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.support9} alt="support9" className="card-img-top" />
          <div className="card-body">Warranty</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.support10} alt="support10" className="card-img-top" />
          <div className="card-body">My Account</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.support11} alt="support11" className="card-img-top" />
          <div className="card-body">Stores</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.support12} alt="support12" className="card-img-top" />
          <div className="card-body">External Brands</div>
        </div>
      </div>


    </div>
  );
};

export default Supportcard;
