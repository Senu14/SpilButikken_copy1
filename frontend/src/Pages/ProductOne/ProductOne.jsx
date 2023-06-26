import React from 'react'
import './oneProduct.scss'

function OneProduct() {
    return (
        <div className="gig">
          <div className="container">
            <div className="left">
                <div className="seller">
                    <div className="user">
                        <h2>Title:<br></br> </h2>
                    </div>
                </div>
              
              <h2>commande:</h2>
    
                <h2>Description :<br></br></h2>

            </div>
            <div className="right">

              <div className='inp'>
              <p>taille:</p><input type="text" name="prix" placeholder='$'

              /> 
              <p>number:</p><input type="text" name="msg" placeholder='send a message'

            /> 
    
              </div>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span></span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                </div>
              </div>
              <button >Commande</button>
    
            </div>
          </div>
      
        </div>
      );
}

export default OneProduct