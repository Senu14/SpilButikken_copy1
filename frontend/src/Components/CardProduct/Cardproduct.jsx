import React from "react";
import './CardProduct.scss'
import { Link } from "react-router-dom";


function ProductCard({ item }) {
    return (
        <div className="gigCard">
            <Link to={`/one/${item.id}`}>
                <div className="imgContainer">
                    <img src={item.image} alt="" />
                </div>
                <div className="info">
                    <p>{item.title}</p>
                    <div className="user">
                        <span >{item.platform_type}</span>
                        <span>{item.username}</span>
                    </div>
                </div>
                <hr />
                <div className="detail">

                    <div className="price">
                        <h2>{item.price},-</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;