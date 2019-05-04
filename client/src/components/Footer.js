import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <div className="footer-content_wrapper">
        <div className="footer-menus">
          <a className="margin-footer" href="/help">CUSTOMER CARE</a>
          <ul>
            <li className="margin-b">We want you to give a great costumer service for you to enjoy to the best our services and products.</li>
            </ul>
        </div>
        <div className="footer-menus">
          <a className="margin-footer" href="/celebrate">ABOUT</a>
          <ul>
            <li className="margin-b">Learn about our journey and why we are Piccard's Vitamins and Herb.</li>
          </ul>
        </div>
        <div  className="links-footer">
          <div className="footer-menus">
            <a className="margin-footer" href="/international.html">SHIPPING</a>
              <ul>
                <li className="margin-b">We deliver all around the US and the Caribean.</li>
              </ul>
          </div>
        </div>
        <div id="footer-refer-a-friend" className="links-footer">
          <div className="footer-menus">
            <a className="margin-footer" href="/share?traffic_source=site_footer?traffic_source=search_page">SOCIAL MEDIA</a>
            <ul>
                <li className="margin-b">Follow us in social media</li>
                
              </ul>
          </div>
        </div>
      </div>
      <div className="back-info">
        <div className="logo-info">
          <img className="tree-img" src="https://www.7apa.com/wp-content/uploads/2018/06/Marketing-Idea-Tree-Brown-Leaves.png" />
        </div>
        <div className="text-info">
          <h2>Something</h2>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
          </ul>
        </div>
      </div>
    
    </footer>
  );
};
      
export default Footer;
