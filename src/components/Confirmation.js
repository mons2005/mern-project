import React, { useState } from 'react';

const Confirmation = ({ items = [], handleBack }) => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orderData = {
      address,
      phoneNumber,
      items,
      totalCost: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    try {
      const response = await fetch('http://localhost:5000/orders', { // Change this to your actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const message = await response.text(); // Get the error message from response
        throw new Error(`Failed to place order: ${message}`);
      }

      alert('Order placed successfully!');
      // Optionally reset the form or navigate to another page
      setAddress('');
      setPhoneNumber('');
      // You might also want to clear the items or navigate back to a main page

    } catch (error) {
      console.error("Error during order submission:", error); // Log error for debugging
      setError(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const totalCost = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="confirmation-container">
      <h2>Confirm Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            pattern="[0-9]{10}" // Basic validation for 10-digit phone numbers
          />
        </div>
        <h3>Your Cart Items:</h3>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.name}>
              {item.quantity} x {item.name} - ₹{item.price} each
              <br />
              <strong>Total: ₹{item.quantity * item.price}</strong>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
        <h3>Total Order Cost: ₹{totalCost}</h3>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Confirm Order'}
        </button>
        {error && <p className="error">{error}</p>} {/* Display error message if any */}
      </form>
      <button onClick={handleBack} className="back-button">Back to Cart</button>
    </div>
  );
};

export default Confirmation;
