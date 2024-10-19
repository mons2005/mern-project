// src/components/Home.js
import React from 'react';

const Home = ({ handleSectionClick }) => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="background" />
        <div className="hero-content">
          <p>HOMEMADE WELLNESS AND WONDERS</p>
          <h1><b>NEETHI NATURALS</b></h1>
          <p>STONE PRESSED COOKING OILS, HOMEMADE MASALAS, HAIRCARE AND SKINCARE PRODUCTS.</p>
          <a href="#products" className="shop-button" onClick={() => handleSectionClick('products')}>
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
