import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KidCard1.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const KidCard1 = () => {
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
    <div className="container">
      {/* Render category cards */}
      <div className="category-cards d-flex">
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.kidC1} alt="kidC1" className="card-img-top" />
        <div className="card-body">Men</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.kidC2} alt="kidC2" className="card-img-top" />
          <div className="card-body">Women</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.kidC3} alt="kidC3" className="card-img-top" />
          <div className="card-body">Kids</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.kidC4} alt="kidC4" className="card-img-top" />
          <div className="card-body">Shoes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Summer Collection')}>
        <img src={assets.kidC5} alt="kidC5" className="card-img-top" />
          <div className="card-body">Summer Collection</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sales')}>
        <img src={assets.kidC6} alt="kidC6" className="card-img-top" />
          <div className="card-body">Sales</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.kidC7} alt="kidC7" className="card-img-top" />
          <div className="card-body">Sports Accessories</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.kidC8} alt="kidC8" className="card-img-top" />
          <div className="card-body">Sports Equipment</div>
        </div>
      </div>


    </div>
  );
};

export default KidCard1;
