import React, { useState } from 'react';
import SportsAccessoriesCollection from '../../Pages/SportsAccessoriesCollection/SportsAccessoriesCollection';

import ItemDetails from '../../Pages/ItemDetails/ItemDetails';
import './Card4.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const Card4 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null); // Reset selected item when switching categories
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      {/* Conditionally render category or item details */}
     
      {selectedCategory === 'Sports Accessories' && <SportsAccessoriesCollection onItemClick={handleItemClick} />}
       <h3>Most Loved Accessories In Summer</h3>
      {/* Render category cards */}
      <div className="category-cards d-flex">
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image24} alt="Image24" className="card-img-top" />
        <div className="card-body">Sunglasses</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image25} alt="Image25" className="card-img-top" />
          <div className="card-body">Cap & Hat</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image26} alt="Image26" className="card-img-top" />
          <div className="card-body">Socks</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image27} alt="Image27" className="card-img-top" />
          <div className="card-body">Water Bottles</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image28} alt="Image28" className="card-img-top" />
          <div className="card-body">Umberlla</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image29} alt="Image29" className="card-img-top" />
          <div className="card-body">Travel Accessory</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image30} alt="Image30" className="card-img-top" />
          <div className="card-body">Bags & Bachpack</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image31} alt="Image31" className="card-img-top" />
          <div className="card-body">Massagers</div>
        </div>
      </div>

      {/* Render item details if an item is selected */}
      {selectedItem && (
        <div className="row mt-4">
          <div className="col-sm-6 offset-sm-3">
            <ItemDetails item={selectedItem} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card4;
