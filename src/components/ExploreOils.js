import React, { useState } from 'react';

// Importing product images
import coconutOilImage from '../images/coco.jpg'; // Ensure this path is correct
import karupattiOilImage from '../images/karupaati.jpg'; // Ensure this path is correct
import MandavellamOilImage from '../images/mandavellam.jpg'; // Ensure this path is correct
import groundnutOilImage from '../images/gn.jpg'; // Ensure this path is correct

const ExploreOils = ({ addToCart, handleSectionClick }) => {
  const [quantities, setQuantities] = useState({});

  const oils = [
    { name: 'Coconut Oil', description: 'Pure cold-pressed coconut oil.', price: 250, image: coconutOilImage },
    { name: 'Mandavellam Oil', description: 'Natural sesame oil for cooking.', price: 300, image: MandavellamOilImage },
    { name: 'Groundnut Oil', description: 'High-quality groundnut oil.', price: 200, image: groundnutOilImage },
    { name: 'Karupatti Oil', description: 'High-quality karupatti oil.', price: 200, image: karupattiOilImage },
  ];

  const handleQuantityChange = (productName, quantity) => {
    // Convert the quantity to a number using parseInt
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity)) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productName]: parsedQuantity,
      }));
    }
  };

  const handleAddToCart = (product) => {
    const currentQuantity = quantities[product.name] || 1;
    addToCart(product, currentQuantity); // Ensure current quantity is added correctly
    handleSectionClick('Confirmation'); // Navigate to Confirmation page
  };

  return React.createElement(
    'section',
    { id: 'oils', className: 'products-section' },
    React.createElement('h2', null, 'Oils'),
    React.createElement('div', { className: 'product-grid' },
      oils.map((product) =>
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

export default ExploreOils;
