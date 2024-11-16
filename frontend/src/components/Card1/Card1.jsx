import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card1.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const Card1 = () => {
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
        <img src={assets.Imagee1} alt="Image1" className="card-img-top" />
        <div className="card-body">Men</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.Image12} alt="Image2" className="card-img-top" />
          <div className="card-body">Women</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.Image3} alt="Image3" className="card-img-top" />
          <div className="card-body">Kids</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.Image4} alt="Image4" className="card-img-top" />
          <div className="card-body">Shoes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Summer-Collection')}>
        <img src={assets.Image5} alt="Image5" className="card-img-top" />
          <div className="card-body">Summer Collection</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sales')}>
        <img src={assets.Image6} alt="Image6" className="card-img-top" />
          <div className="card-body">Sales</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports-Accessories')}>
        <img src={assets.Image7} alt="Image7" className="card-img-top" />
          <div className="card-body">Sports Accessories</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports-Equipment')}>
        <img src={assets.Image8} alt="Image8" className="card-img-top" />
          <div className="card-body">Sports Equipment</div>
        </div>
      </div>


    </div>
  );
};

export default Card1;
