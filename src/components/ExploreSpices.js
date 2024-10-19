import React, { useState } from 'react';

// Importing images from the correct path
import RchilliImage from '../images/rchilli.jpg'; // Adjust path based on your structure
import kulambuImage from '../images/kulambu.jpg';
import rasamImage from '../images/rasam.jpg';
import pepperImage from '../images/pepper.jpg';
import corianderImage from '../images/coriander.jpg';
import turmericImage from '../images/turmeric.jpg';
import sambarImage from '../images/sambar.jpg';
import kchilliImage from '../images/kchilli.jpg';
import chicken65Image from '../images/chicken65.jpg';
import cuminImage from '../images/cumin.jpg';
import briyaniImage from '../images/briyani.jpg';

const ExploreSpices = ({ addToCart, handleSectionClick }) => {
  const [quantities, setQuantities] = useState({});

  const spices = [
    { name: 'Red Chilli Powder', description: 'High-quality red chilli powder.', price: 100, image: RchilliImage },
    { name: 'Kulambu Powder', description: 'Spice mix for delicious kulambu.', price: 120, image: kulambuImage },
    { name: 'Rasam Powder', description: 'Flavorful rasam spice mix.', price: 130, image: rasamImage },
    { name: 'Pepper', description: 'Organic whole black pepper.', price: 150, image: pepperImage },
    { name: 'Coriander Powder', description: 'Freshly ground coriander.', price: 90, image: corianderImage },
    { name: 'Turmeric Powder', description: 'Bright yellow turmeric.', price: 80, image: turmericImage },
    { name: 'Sambar Powder', description: 'Spice mix for sambar.', price: 110, image: sambarImage },
    { name: 'Kashmiri Chilli Powder', description: 'Mild and vibrant Kashmiri chilli powder.', price: 140, image: kchilliImage },
    { name: 'Chicken 65 Spice Mix', description: 'Spice mix for making Chicken 65.', price: 160, image: chicken65Image },
    { name: 'Cumin Seeds', description: 'Whole organic cumin seeds.', price: 95, image: cuminImage },
    { name: 'Biryani Spice Mix', description: 'Special spice mix for biryani.', price: 170, image: briyaniImage },
  ];

  const handleQuantityChange = (productName, quantity) => {
    setQuantities({ ...quantities, [productName]: quantity });
  };

  const handleAddToCart = (product) => {
    const quantity = parseInt(quantities[product.name]) || 1; // Ensure quantity is a number
    addToCart(product, quantity);
    handleSectionClick('Confirmation'); // Navigate to Confirmation page
  };

  return (
    <section id="spices" className="products-section">
      <h2>Spices & Masala</h2>
      <div className="product-grid">
        {spices.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                value={quantities[product.name] || ''}
                onChange={(e) => handleQuantityChange(product.name, e.target.value)}
                className="quantity-input"
              />
              <button
                onClick={() => handleAddToCart(product)} // Call the new handler
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSpices;
