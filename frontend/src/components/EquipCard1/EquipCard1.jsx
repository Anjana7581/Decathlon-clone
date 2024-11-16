import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EquipCard1.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const EquipCard1 = () => {
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
        <img src={assets.eqc1} alt="eqc1" className="card-img-top" />
        <div className="card-body">Men</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.eqc2} alt="eqc2" className="card-img-top" />
          <div className="card-body">Women</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.eqc3} alt="eqc3" className="card-img-top" />
          <div className="card-body">Kids</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.eqc4} alt="eqc4" className="card-img-top" />
          <div className="card-body">Shoes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Summer-Collection')}>
        <img src={assets.eqc5} alt="eqc5" className="card-img-top" />
          <div className="card-body">Summer Collection</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sales')}>
        <img src={assets.eqc6} alt="eqc6" className="card-img-top" />
          <div className="card-body">Sales</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports-Accessories')}>
        <img src={assets.eqc7} alt="eqc7" className="card-img-top" />
          <div className="card-body">Sports Accessories</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports-Equipment')}>
        <img src={assets.eqc8} alt="eqc8" className="card-img-top" />
          <div className="card-body">Sports Equipment</div>
        </div>
      </div>


    </div>
  );
};

export default EquipCard1;
