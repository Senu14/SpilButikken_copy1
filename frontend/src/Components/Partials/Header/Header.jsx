import React from 'react';
import './Header.scss';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-menu__toggle" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>

      {isOpen && (
        <ul className="burger-menu__list">
          <li className="burger-menu__item">Home</li>
          <li className="burger-menu__item">Products</li>
          <li className="burger-menu__item">About</li>
          <li className="burger-menu__item">Login</li>
          <li className="burger-menu__item">Contact</li>
        </ul>
      )}
    </div>
  );
};



export default Header;