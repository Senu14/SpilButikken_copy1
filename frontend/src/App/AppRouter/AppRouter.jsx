import React from 'react';
import { Route, Routes, 
        //  RouterProvider, 
        //  createBrowserRouter, 
        //  createRoutesFromElements
       } from 'react-router-dom';


//Import Pages
import Home from '../../Pages/Home/Home';
import Products from '../../Pages/Products/Products';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Login from '../../Pages/Login/Login';
import OneProduct from '../../Pages/ProductOne/ProductOne';

//Layouts that wrapped the other pages
import CollectedNav from '../../CollectNav/CollectedNav';


  const AppRouter = () =>{
    return (
      <Routes>
      <Route path="/" element={<CollectedNav />} />
      <Route index path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/one/:id" element={<OneProduct />} /> 
     

      </Routes>

    );
  }
        

  


export default AppRouter;