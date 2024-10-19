import React, { useState } from 'react';

// Importing product images
import roseImage from '../images/rose.jpg'; // Ensure this path is correct
import shikakaiImage from '../images/shikakai.jpg'; // Ensure this path is correct
import bathImage from '../images/bath.jpg'; // Ensure this path is correct

const ExploreHairCare = ({ addToCart, handleSectionClick }) => {
  const [quantities, setQuantities] = useState({});

  const hairCareProducts = [
    { name: 'Rose Water', description: 'Natural rose water for skin care.', price: 60, image: roseImage },
    { name: 'Shikakai Powder', description: 'Traditional Shikakai powder for hair care.', price: 70, image: shikakaiImage },
    { name: 'Herbal Bath Powder', description: 'Herbal powder for refreshing baths.', price: 90, image: bathImage },
  ];

  const handleQuantityChange = (productName, quantity) => {
    setQuantities({ ...quantities, [productName]: quantity });
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantities[product.name] || 1);
    handleSectionClick('Confirmation'); // Navigate to Confirmation page
  };

  return React.createElement(
    'section',
    { id: 'haircare', className: 'products-section' },
    React.createElement('h2', null, 'Hair & Skin Care'),
    React.createElement('div', { className: 'product-grid' },
      hairCareProducts.map((product) =>
        React.createElement('div', { key: product.name, className: 'product-card' },
          React.createElement('img', { src: product.image, alt: product.name, className: 'product-image' }),
          React.createElement('div', { className: 'product-details' },
            React.createElement('h3', null, product.name),
            React.createElement('p', null, product.description),
            React.createElement('p', null, `Price: ₹${product.price}`),
            React.createElement('input', {
              type: 'number',
              min: '1',
              placeholder: 'Quantity',
              value: quantities[product.name] || '',
              onChange: (e) => handleQuantityChange(product.name, e.target.value),
              className: 'quantity-input',
            }),
            React.createElement('button', {
              onClick: () => handleAddToCart(product),
              className: 'add-to-cart-button'
            }, 'Add to Cart')
          )
        )
      )
    )
  );
};

export default ExploreHairCare;
