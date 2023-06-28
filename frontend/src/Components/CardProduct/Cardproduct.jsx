import React from "react";
import './CardProduct.scss'
import { Link } from "react-router-dom";
// import SorterComponant from '../SorterComponent.jsx'



// const filterData = data
// .filter((item) => item.platform_type > playstation )
// .filter((item) => item.platform_type < );



function ProductCard({ item }) {
    // <SorterComponant SortHandler = {SortHandler} sort = { sort} />
    return (
        <div className="gigCard">
            <Link to={`/one/${item.id}`}> 
                <img src={item.image} alt="" /></Link>
                <div className="info">
                    <div className="user">
                      <span >{item.version}</span>
                      <span>{item.username}</span>
                    </div>
                    <p>{item.title}</p>         
                </div>
              
                <div className="detail">
                    
                    <div className="price">
                      <h2>DKK{item.price}</h2>
                    </div>
                </div>
           
        </div>
    );
}

export default ProductCard;