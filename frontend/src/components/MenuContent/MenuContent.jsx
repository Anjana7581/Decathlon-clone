import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './MenuContent.css';
import AllSports from "../../components/AllSports/AllSports"
import Men from '../../components/Men/Men'
import Women from '../../components/Women/Women';
import SportsAccessories from '../../components/SportsAccessories/SportsAccessories'
import SportsEquipment from '../../components/SportsEquipment/SportsEquipment'
import GymActiveware from '../../components/GymActiveware/GymActiveware'
import OnlineBrand from '../../components/OnlineBrand/OnlineBrand'
import KidsMenu from '../../components/KidsMenu/KidsMenu';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
const MenuContent = ({ isOpen }) => {

    const [visibleSection, setVisibleSection] = useState('all-sports');

  
    useEffect(() => {
        if (isOpen) {
            setVisibleSection('all-sports'); // Display 'All Sports' section by default when menu is opened
            document.body.classList.add('no-scroll'); // Disable scrolling
        } else {
            setVisibleSection(null); // Reset visible section when the menu is closed
            document.body.classList.remove('no-scroll'); // Enable scrolling
        }

        // Clean up function to remove the class when the component is unmounted or isOpen changes
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const toggleSection = (section) => {
        setVisibleSection((prevSection) => {
            // If the clicked section is already visible, keep it open
            if (prevSection === section) {
                return section;
            }
            // Otherwise, toggle the visibility of the clicked section
            return section;
        });
    };
    return (
        isOpen && (
            
            <div className="menu-content">
                <div>
            <h1 onClick={() => toggleSection('all-sports')} className='headers'>All Sports</h1>
            {visibleSection === 'all-sports' && (

               <div className={`section-content ${visibleSection === 'all-sports' && 'visible'}`}>
                     <div className="list-section">
                        <AllSports/>
                    </div>
                </div>
                 )}
                </div>
                <div>
                    <h1 onClick={() => toggleSection('men')}className='headers'>Men</h1>
                    {visibleSection === 'men' && (
                        <div className="section-content visible men">
                          <div className="list-section">
                            <Men/>
                          </div>
                        </div>
                    )}
                </div>
                
                <div>
                    <h1 onClick={() => toggleSection('women')} className='headers'>Women</h1>
                    {visibleSection === 'women' && (
                        <div className="section-content visible women">
                           <div className="list-section">
                             <Women/>
                           </div>
                        </div>
                    )}
                </div>
                <div>
                    <h1 onClick={() => toggleSection('kids')}className='headers'>Kids</h1>
                    {visibleSection === 'kids' && (
                        <div className="section-content visible kids">
                           <div className="list-section">
                            <KidsMenu/>
                           </div>
                        </div>
                    )}
                </div>
                <div>
                    <h1 onClick={() => toggleSection('sports-accessories')} className='headers'>Sports Accessories</h1>
                    {visibleSection === 'sports-accessories' && (
                        <div className="section-content visible sports-accessories">
                          <div className="list-section">
                            <SportsAccessories/>
                          </div>
                        </div>
                    )}
                </div>
                <div>
                    <h1 onClick={() => toggleSection('sports-equipment')} className='headers'>Sports Equipment</h1>
                    {visibleSection === 'sports-equipment' && (
                        <div className="section-content visible sports-equipment">
                         <div className="list-section">
                           <SportsEquipment/>
                         </div>
                        </div>
                    )}
                </div>
                <div>
                    <h1 onClick={() => toggleSection('gym-act-equip')} className='headers'>Gym Activewear & Equipment</h1>
                    {visibleSection === 'gym-act-equip' && (
                        <div className="section-content visible gym-act-equip">
                          <div className="list-section">
                            <GymActiveware/>
                          </div>
                        </div>
                    )}
                </div>
                <div>
                    <h1 onClick={() => toggleSection('online-brands')} className='headers'>Online Exclusive Brands</h1>
                    {visibleSection === 'online-brands' && (
                        <div className="section-content visible online-brands">
                          <div className="list-section">
                             <OnlineBrand/>
                          </div>
                        </div>
                    )}
                </div>
            
                 <div className="section-side-container">
                    <MenuSideBar/>
                 </div>
            </div>
        )
    );
};

export default MenuContent;
