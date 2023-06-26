
import React from "react";
import ProductCard from "../../Components/CardProduct/Cardproduct.jsx";
import './Products.scss';
import { cards as data } from '../../data.js';


const Products = () => { 
  return (
    <div className="gigs">
      <div className="container">
        <div className="cards">
        {
          data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
}

        </div>
      </div>
    </div>
  );
}

export default Products;