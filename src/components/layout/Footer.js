import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  // gets the current year for the footer so it is never out of date.
  let date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-link-section">
          <div className='left-footer'>
          <h4>Our Media</h4>
          <Link to="#" className="footer-link">
          <a href='https://www.facebook.com/' onClick="window.open('https://www.facebook.com/')" className='media-links'> Blog </a>
          </Link>
          <Link to="#" className="footer-link">
            <a href='https://www.facebook.com/' onClick="window.open('https://www.facebook.com/')" className='media-links'> Facebook </a>
          </Link>
          <Link to="#" className="footer-link">
          <a href='https://www.facebook.com/' onClick="window.open('https://www.facebook.com/')" className='media-links'> Twitter </a>
          </Link>
          </div>
          <div className='middle-footer'>
          <h4>Information</h4>
          <Link to="#" className="footer-link">
            How does it work
          </Link>
          <Link to="#" className="footer-link">
            How do I become an earner
          </Link>
          <Link to="#" className="footer-link">
            How do I start shopping?
          </Link>
          </div>
          <div className='right-footer'>
          <h4>Support</h4>
          <Link to="#" className="footer-link">
            Contact support
          </Link>
          <Link to="#" className="footer-link">
            Frequently Asked Questions
          </Link>
          <Link to="#" className="footer-link">
            Help Center
          </Link>
          </div>
        </div>
        <div className="colophon">Copyright &copy; {date} WalletPro </div>
      </div>
    </footer>
  );
};

export default Footer;
