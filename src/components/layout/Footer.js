import React from "react";
import { Link } from "react-router-dom";

import "../scss/Footer.scss";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-link-section">
          <h4>Information</h4>
          <Link to="/HowItWorks" className="footer-link">
            How does it work
          </Link>
          <Link to="#" className="footer-link">
            What is Cryptocurrency
          </Link>
          <Link to="#" className="footer-link">
            How do I get started
          </Link>
        </div>
        <div className="colophon">Copyright &copy; {date} WalletPro </div>
      </div>
    </footer>
  );
};

export default Footer;
