import React, { useState } from 'react';
import './App.css';
import logoImage from './images/logo.jpg';
import ExploreOils from './components/ExploreOils';
import ExploreSpices from './components/ExploreSpices';
import ExploreInstantMix from './components/ExploreInstantMix';
import ExploreGroceries from './components/ExploreGroceries';
import ExploreHairCare from './components/ExploreHairCare';
import Products from './components/products';
import SignUp from './components/signup';
import Login from './components/login';
import Cart from './components/cart';
import Home from './components/Home';
import Confirmation from './components/Confirmation';

function App() {
  const [visibleSection, setVisibleSection] = useState('Home');
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

  const handleSectionClick = (section) => {
    setVisibleSection(section);
  };

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...existingItem, quantity: existingItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
    handleSectionClick('Confirmation'); // Navigate to the Confirmation page
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== item.name));
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set the user as logged in
    setVisibleSection('Home'); // Navigate to Home
  };

  const handleSignUpSuccess = () => {
    setIsLoggedIn(true); // Set the user as logged in after sign-up
    setVisibleSection('Home'); // Navigate to Home
  };

  return (
    <div className="App">
      <header className="header">
        <img src={logoImage} alt="Logo" className="logo" />
        <nav>
          <a href="#home" onClick={() => handleSectionClick('Home')} className={visibleSection === 'Home' ? 'active' : ''}>Home</a>
          <a href="#products" onClick={() => handleSectionClick('products')} className={visibleSection === 'products' ? 'active' : ''}>Products</a>
          <a href="#cart" onClick={() => handleSectionClick('cart')} className={visibleSection === 'cart' ? 'active' : ''}>Cart</a>
          {!isLoggedIn && (
            <>
              <a href="#signup" onClick={() => handleSectionClick('SignUp')} className={visibleSection === 'SignUp' ? 'active' : ''}>Sign Up</a>
              <a href="#login" onClick={() => handleSectionClick('login')} className={visibleSection === 'login' ? 'active' : ''}>Login</a>
            </>
          )}
          {isLoggedIn && (
            <span className="logout" onClick={() => { setIsLoggedIn(false); setVisibleSection('Home'); }}>Logout</span>
          )}
        </nav>
      </header>

      <main>
        {visibleSection === 'Home' && <Home handleSectionClick={handleSectionClick} />}
        {visibleSection === 'products' && <Products handleSectionClick={handleSectionClick} addToCart={addToCart} />}
        {visibleSection === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} />}
        {visibleSection === 'SignUp' && <SignUp handleSignUpSuccess={handleSignUpSuccess} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'login' && <Login handleLoginSuccess={handleLoginSuccess} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'oils' && <ExploreOils addToCart={addToCart} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'spices' && <ExploreSpices addToCart={addToCart} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'instant-mix' && <ExploreInstantMix addToCart={addToCart} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'groceries' && <ExploreGroceries addToCart={addToCart} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'haircare' && <ExploreHairCare addToCart={addToCart} handleSectionClick={handleSectionClick} />}
        {visibleSection === 'Confirmation' && (
          <Confirmation 
            items={cart} 
            handleBack={() => setVisibleSection('cart')} 
            handleConfirmOrder={(address, phoneNumber) => {
              console.log("Order Confirmed!", { address, phoneNumber, cart });
              setCart([]); // Clear the cart after confirmation if desired
              setVisibleSection('Home'); // Navigate back to Home or desired section
            }} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
