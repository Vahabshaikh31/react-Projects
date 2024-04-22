import React, { useState } from 'react';
import './Reaea.css'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="dropdown" onClick={toggleDropdown}>
          <span>Dropdown</span>
          {showDropdown && (
            <div className="dropdown-content">
              <a href="/dropdown-item-1">Dropdown Item 1</a>
              <a href="/dropdown-item-2">Dropdown Item 2</a>
              <a href="/dropdown-item-3">Dropdown Item 3</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
