import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Payment Methods</h2>
        <img src="../../../Images/pngegg.png" alt="masstercard" />
        <img src="/path/to/payment2.png" alt="Payment Method 2" />
        <img src="/path/to/payment3.png" alt="Payment Method 3" />
      </div>
      <div>
        <h2>Follow Us</h2>
        <a href="https://www.facebook.com">
        <img src={require("../../../Assets/Images/65585-program-messenger-logo-facebook-honors-icon.png")} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          {/* <img src={require("../../../Assets/Images/")} alt="Twitter" /> */}
        </a>
        <a href="https://www.instagram.com">
        <img src={require("../../../Assets/Images/69800-logo-computer-instagram-icons-free-clipart-hq.png")} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
