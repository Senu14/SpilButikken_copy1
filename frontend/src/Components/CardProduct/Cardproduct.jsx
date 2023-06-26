import React from "react";
import './CardProduct.scss'
import { Link } from "react-router-dom";
import { cards } from "../../data";


function ProductCard({ item }) {
    return (
        <div className="gigCard">
            <Link to={`/oneProduct`}> {/* This link will route to your product detail page */}
                <img src={item.cover} alt="" />
                <div className="info">
                    <div className="user">
                      <img src={item.images || "/img/noavatar.jpg"} alt="" />
                      <span>{item.username}</span>
                    </div>
                    <p>{item.title}</p>         
                </div>
                <hr />
                <div className="detail">
                    <img src="./img/heart.png" alt="" />
                    <div className="price">
                      <span>STARTING AT</span>
                      <h2>$ {item.prix}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;