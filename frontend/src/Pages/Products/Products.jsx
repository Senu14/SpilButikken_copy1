import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/CardProduct/Cardproduct.jsx";
import './Products.scss';
import axios from "axios";

const Products = () => { 
  const [data, setData] = useState([]);
  const [maxPrice, setMaxPrice] = useState(''); // new state for maxPrice

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:4000/games?maxPrice=${maxPrice}`);
      setData(result.data);
    }

    fetchData();
  }, [maxPrice]); // re-fetch when maxPrice changes

  const handleMaxPriceChange = (event) => { // handler for maxPrice change
    setMaxPrice(event.target.value);
  }

  return (
    <div className='global-body-color'>
      <div className="gigs">
        <div className="container">
          {/* input for maxPrice */}
          <input type="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max price" />
          <div className="cards">
          {
            data.map((item) => ( //looping the data with Map
              <ProductCard key={item.id} item={item} udgave /> 
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
