import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="Add Icon" />
                <p>Add Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="Add Icon" />
                <p>List Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="Add Icon" />
                <p>Orders</p>
            </div>
        </div>
      
    </div>
  );
}

export default Sidebar;
