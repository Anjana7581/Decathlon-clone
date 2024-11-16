import React from 'react'
import './MenuSideBar.css'
import { GoArrowRight } from "react-icons/go";
const MenuSideBar = () => {
  return (
    <div className='menusidebar-container'>
        <button className='sidebar-btn'>DOWNLOAD NOW</button>
        <div className="sidebar-list">
        <ul>
          <li>Clearance <GoArrowRight  style={{marginLeft:'200px',fontSize:'15px'}}/></li>
          <li>Best Sellers of Decathlon<GoArrowRight style={{marginLeft:'116px',fontSize:'15px'}}/></li>
          <li>Decathlon Stores<GoArrowRight  style={{marginLeft:'163px'}}/></li>
          <li>Assisted Shopping - Free Expert Advice<GoArrowRight  style={{marginLeft:'33px',fontSize:'15px'}}/></li>
          <li>Decathlon Blog<GoArrowRight style={{marginLeft:'174px',fontSize:'15px'}} /></li>
          <li>Made In India<GoArrowRight  style={{marginLeft:'183px',fontSize:'15px'}}/></li>
          <li>Online Events<GoArrowRight  style={{marginLeft:'180px',fontSize:'15px'}}/></li>
          <li>Support<GoArrowRight  style={{marginLeft:'217px',fontSize:'15px'}} /></li>
          <li>Happy Customer Milestones<GoArrowRight  style={{marginLeft:'98px',fontSize:'15px'}} /></li>
          <li>After Sale Services<GoArrowRight  style={{marginLeft:'150px',fontSize:'15px'}} /> </li>
        </ul>
        </div>
    </div>
  )
}

export default MenuSideBar