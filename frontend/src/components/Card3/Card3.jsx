import React, { useState } from 'react';
import MenCollection from '../../Pages/MenCollection/MenCollection';
import WomenCollection from '../../Pages/WomenCollection/WomenCollection';
import KidsCollection from '../../Pages/KidsCollection/KidsCollection';
import ShoesCollection from '../../Pages/ShoesCollection/ShoesCollection';
import SummerCollection from '../../Pages/SummerCollection/SummerCollection';
import SalesCollection from '../../Pages/SalesCollection/SalesCollection';
import SportsAccessoriesCollection from '../../Pages/SportsAccessoriesCollection/SportsAccessoriesCollection';
import SportsEquipmentCollection from '../../Pages/SportsEquipmentCollection/SportsEquipmentCollection';
import ItemDetails from '../../Pages/ItemDetails/ItemDetails';
import './Card3.css'; // Import your custom CSS
import { assets } from "../../assets/assets";

const Card3 = () => {
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
      
      {selectedCategory === 'Kids' && <KidsCollection onItemClick={handleItemClick} />}
      {selectedCategory === 'Sports Accessories' && <SportsAccessoriesCollection onItemClick={handleItemClick} />}
       <h3>Top Searched In Water Sport Collection</h3>

      {/* Render category cards */}
      <div className="category-cards d-flex">
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image16} alt="Image16" className="card-img-top" />
        <div className="card-body">Swimming Goggles</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image17} alt="Image17" className="card-img-top" />
          <div className="card-body">Swimming Caps</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image18} alt="Image18" className="card-img-top" />
          <div className="card-body">Men Swim Costumes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Shoes')}>
        <img src={assets.Image19} alt="Image19" className="card-img-top" />
          <div className="card-body">Women Swim Costumes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Kids')}>
        <img src={assets.Image20} alt="Image20" className="card-img-top" />
          <div className="card-body">Kids Swim Costumes</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image21} alt="Image21" className="card-img-top" />
          <div className="card-body">Swim Learning Accessory</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image22} alt="Image22" className="card-img-top" />
          <div className="card-body">Flip Flop</div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Sports Accessories')}>
        <img src={assets.Image23} alt="Image23" className="card-img-top" />
          <div className="card-body">Microfiber Towels</div>
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

export default Card3;
