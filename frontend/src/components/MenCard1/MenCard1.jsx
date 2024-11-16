import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenCard1.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const MenCard1 = () => {
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
            <h3>Top Rated In Mens</h3>

      {/* Render category cards */}
      <div className="category-cards d-flex">
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.Image1} alt="Image1" className="card-img-top" />
        <div className="card-body">Men</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.Image9} alt="Image9" className="card-img-top" />
          <div className="card-body">Women</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.Image10} alt="Image10" className="card-img-top" />
          <div className="card-body">Kids</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.Image11} alt="Image11" className="card-img-top" />
          <div className="card-body">Shoes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Summer Collection')}>
        <img src={assets.MenCard1} alt="MenCard1" className="card-img-top" />
          <div className="card-body">Summer Collection</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sales')}>
        <img src={assets.MenCard2} alt="MenCard2" className="card-img-top" />
          <div className="card-body">Sales</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.MenCard3} alt="MenCard3" className="card-img-top" />
          <div className="card-body">Sports Accessories</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Equipment')}>
        <img src={assets.MenCard4} alt="MenCard4" className="card-img-top" />
          <div className="card-body">Sports Equipment</div>
        </div>
      </div>


    </div>
  );
};

export default MenCard1;
