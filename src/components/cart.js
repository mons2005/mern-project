import React, { useState } from 'react';
import Confirmation from './Confirmation'; // Ensure this component is created

const Cart = ({ cart, removeFromCart }) => {
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmOrder = (address, phoneNumber) => {
    alert(`Order confirmed! Address: ${address}, Phone: ${phoneNumber}`);
    setShowConfirmation(false);
    // Optionally clear the cart after confirmation
    // clearCart(); // Implement this if needed
  };

  return (
    <section id="cart" className="cart-section">
      <h2>Your Cart</h2>
      {showConfirmation ? (
        <Confirmation
          items={cart} // Ensure cart items are passed with quantity
          handleConfirmOrder={handleConfirmOrder}
          handleBack={() => setShowConfirmation(false)}
        />
      ) : (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.name} className="cart-item">
                  <img 
                    src={item.image || 'placeholder.jpg'} // Fallback image if none provided
                    alt={item.name} 
                    className="cart-item-image" 
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item)} className="remove-button">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="total-cost">
                <h3>Total Cost: ₹{totalCost}</h3>
              </div>
              <button className="place-order-button" onClick={() => setShowConfirmation(true)}>
                Place Order
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Cart;
