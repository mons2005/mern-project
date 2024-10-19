import React, { useState } from 'react';

// Importing images
import healthImage from '../images/health.jpg'; // Ensure this path is correct
import idliImage from '../images/idli.jpg'; // Ensure this path is correct
import ulundhaggaliImage from '../images/ulundhaggali.jpg'; // Ensure this path is correct

const ExploreInstantMix = ({ addToCart, handleSectionClick }) => {
  const [quantities, setQuantities] = useState({});

  const instantMix = [
    { name: 'Health Mix', description: 'Nutritional health mix for a wholesome diet.', price: 180, image: healthImage },
    { name: 'Idli Mix', description: 'Instant idli mix for quick preparation.', price: 100, image: idliImage },
    { name: 'Ulundha Ggali', description: 'Traditional Ulundha ggali instant mix.', price: 120, image: ulundhaggaliImage },
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
    { id: 'instant-mix', className: 'products-section' },
    React.createElement('h2', null, 'Instant Mix'),
    React.createElement('div', { className: 'product-grid' },
      instantMix.map((product) =>
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

export default ExploreInstantMix;
