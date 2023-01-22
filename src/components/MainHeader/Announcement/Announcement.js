import React from 'react';
import './Announcement.css';
import OptionsDropdown from './OptionsDropdown';

const Announcement = () => {
  return (
    <div className="container">
      <div className="helper"></div>
      <p className="messege">FREE SHIPPING ON ALL ORDERS OVER $40 </p>

      <div className="OptionsDropdownContainer">
        <OptionsDropdown className="OptionsDropdown" />
      </div>
    </div>
  );
};

export default Announcement;
