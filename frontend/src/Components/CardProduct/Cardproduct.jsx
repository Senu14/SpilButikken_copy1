import React from "react";
import './CardProduct.scss'
import { Link } from "react-router-dom";
import SorterComponant  from "../SorterComponent.jsx";
// import { useState } from "react";





// const [sort, setSort] = useState("")
//   const SortHandler = (e) => {
//     setSort(e.target.value)
//     console.log(e.target.value);


//   }

function ProductCard({ item }) {

    // const filterData = data
    // .filter((item) => item.platform_type > playstation 5)
    // .filter((item) => item.platform_type < playstation 4);

    return (
        <div className="gigCard">
            {/* <SorterComponant SortHandler = {SortHandler} sort = { sort} /> */}
            <Link to={`/one/${item.id}`}> 
                <img src={item.image} alt="" /></Link>
                <div className="info">
                    <div className="user">
                     <span>{item.version}</span>
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