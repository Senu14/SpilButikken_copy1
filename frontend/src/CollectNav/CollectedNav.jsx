import React from 'react';
import { NavLink, Outlet } from "react-router-dom";


 const CollectedNav = () => {
  return (
    <div className='collected-nav'>
     <header>
        <nav>
          <h1>The Game Shope</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="Products">Products</NavLink>
          <NavLink to="About">About</NavLink>
          
          <NavLink to="Login">Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}



export default CollectedNav;
