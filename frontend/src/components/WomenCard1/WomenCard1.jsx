import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WomenCard1.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const WomenCard1 = () => {
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
        <h3>Favourite Categories This Season</h3>
      {/* Render category cards */}
      <div className="category-cards d-flex">
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.womencard1} alt="womencard1" className="card-img-top" />
        <div className="card-body">Men</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.womencard2} alt="womencard2" className="card-img-top" />
          <div className="card-body">Women</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.womencard3} alt="womencard3" className="card-img-top" />
          <div className="card-body">Kids</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.womencard4} alt="womencard4" className="card-img-top" />
          <div className="card-body">Shoes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Summer Collection')}>
        <img src={assets.Image2} alt="Image2" className="card-img-top" />
          <div className="card-body">Summer Collection</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sales')}>
        <img src={assets.womencard5} alt="womencard5" className="card-img-top" />
          <div className="card-body">Sales</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.womencard6} alt="womencard6" className="card-img-top" />
          <div className="card-body">Sports Accessories</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.womencard7} alt="womencard7" className="card-img-top" />
          <div className="card-body">Sports Equipment</div>
        </div>
      </div>


    </div>
  );
};

export default WomenCard1;
