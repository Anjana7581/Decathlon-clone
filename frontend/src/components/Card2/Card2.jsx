import React, { useState } from 'react';
import MenCollection from '../../Pages/MenCollection/MenCollection';
import WomenCollection from '../../Pages/WomenCollection/WomenCollection';
import ItemDetails from '../../Pages/ItemDetails/ItemDetails';
import './Card2.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const Card2 = () => {
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
      {selectedCategory === 'Men' && <MenCollection onItemClick={handleItemClick} />}
      {selectedCategory === 'Women' && <WomenCollection onItemClick={handleItemClick} />}
    

      {/* Render category cards */}
      <h3>Bestseller In Summer</h3>
      <div className="category-cards d-flex">
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.Image1} alt="Image1" className="card-img-top" />
        <div className="card-body">Mens T-shirt</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.Image9} alt="Image9" className="card-img-top" />
          <div className="card-body">Mens Shorts</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.Image10} alt="Image10" className="card-img-top" />
          <div className="card-body">Men Track Pants</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Men')}>
        <img src={assets.Image11} alt="Image11" className="card-img-top" />
          <div className="card-body">Men Trousers</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.Image12} alt="Image12" className="card-img-top" />
          <div className="card-body">Women Tops</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.Image13} alt="Image13" className="card-img-top" />
          <div className="card-body">Women Shorts</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.Image14} alt="Image14" className="card-img-top" />
          <div className="card-body">Women Tracks</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Women')}>
        <img src={assets.Image15} alt="Image15" className="card-img-top" />
          <div className="card-body">Leggings</div>
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

export default Card2;
