import React, { useState } from 'react';

// Importing images from the correct path
import urudDalImage from '../images/urud dal.jpg'; // Ensure this path is correct
import vellamImage from '../images/vellam.jpg'; // Ensure this path is correct
import karupattiImage from '../images/karupaati2.jpg'; // Ensure this path is correct

const ExploreGroceries = ({ addToCart, handleSectionClick }) => {
  const [quantities, setQuantities] = useState({});

  const groceries = [
    { name: 'Urud Dal', description: 'High-quality urud dal for daily cooking.', price: 90, image: urudDalImage },
    { name: 'Vellam', description: 'Natural jaggery for sweets and cooking.', price: 75, image: vellamImage },
    { name: 'Karupatti', description: 'Traditional palm jaggery.', price: 140, image: karupattiImage },
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
    { id: 'groceries', className: 'products-section' },
    React.createElement('h2', null, 'Groceries'),
    React.createElement('div', { className: 'product-grid' },
      groceries.map((product) =>
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

export default ExploreGroceries;
