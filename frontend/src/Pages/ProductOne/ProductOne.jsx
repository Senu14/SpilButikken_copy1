import React, {useEffect, useState} from 'react'
import './ProductOne.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function OneProduct( match ) {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  console.log('Id:', id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/games/${id}`);
        console.log('Fetched data:', result.data); 
        if (result.data.length > 0) {setProduct(result.data[0])}
        else{console.error("no data received")}
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
            <div className="seller">
                <div className="user">
                    <h2>Title: {product.title}<br></br> </h2>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Platform Type: {product.platform_type}</p>
                    <p>Version: {product.version}</p>
                    <p>Language: {product.language}</p>
                    <p>Release Date: {product.release_date}</p>
                    <p>Genre: {product.genre}</p>
                    <p>Developer ID: {product.developer_id}</p>
                    <p>Number of Players: {product.players}</p>
                    <p>Rating: {product.rating}</p>
                </div>
            </div>
        </div>
        <div className="right">
              <img src={product.image} alt={product.title} /> {/* Display the image here */}
            </div>
       
      </div>
    </div>
  );
  }
export default OneProduct