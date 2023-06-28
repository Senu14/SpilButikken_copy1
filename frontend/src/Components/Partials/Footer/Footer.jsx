import React from 'react';
// import Space from 'react-spaces';
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Payment Methods</p>
      
       <img src={require("../../../Assets/Images/mastercardlogo.png")} className="Payment" alt=''/>
        <img src={require("../../../Assets/Images/paypallogo.png")} className="payment"alt=''/>
        <img src={require("../../../Assets/Images/mobilepaylogo3.png")} className="payment"alt='' />
       
      </div>
      <div>
        <p>Follow Us</p>
        <a href="https://www.facebook.com">
        <img src={require("../../../Assets/Images/65585-program-messenger-logo-facebook-honors-icon.png")}className="media" alt='' />
        </a>
        <a href="https://www.twitter.com">
          <img src={require("../../../Assets/Images/twitterlogo.png")}className="media"alt='' />
        </a>
        <a href="https://www.instagram.com">
        <img src={require("../../../Assets/Images/69800-logo-computer-instagram-icons-free-clipart-hq.png")}className="mediam" alt=''/>
        </a>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
