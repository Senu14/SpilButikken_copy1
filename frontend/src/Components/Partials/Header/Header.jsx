
import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      
      <button className="header__burger" onClick={toggleMenu}>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
      {isOpen && (
        <ul className="header__menu">
         <Link to="/"   className='Links'> <li className="header__menu-item">Home</li></Link>
         <Link to="/products"   className='Links'><li className="header__menu-item">Product</li></Link>
         <Link to="/About"  className='Links'><li className="header__menu-item">About</li></Link>
         <Link to="/login"  className='Links'> <li className="header__menu-item">Login</li></Link>
         <Link to="/Contact"  className='Links'> <li className="header__menu-item">Contact</li></Link>
        </ul>
      )}
    </header>
  );
};

export default Header;
