import React from "react";
import './Cards.scss';

const Cards = ({ data }) =>{

     const { title, image, dic, developer, } = data;

     return( 
          <div className="card">
               <div className="card-title">{title}</div>
               <div className="card-dic">{dic}</div>
               <div className="card-developer">{developer}</div>
               <img className="card-image" src={image.fullpath} alt={title} />
             
          
          </div>
     )
}



export default Cards;