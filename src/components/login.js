import React, { useState } from 'react';

function Login({ handleSectionClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    if (email && password) {
      setLoading(true); // Start loading
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const errorData = await response.text();
          setMessage(errorData); // Set error message from server
          return;
        }

        const data = await response.text();
        setMessage(data); // Successful login message
        handleSectionClick('Home'); // Navigate to Home after successful login
      } catch (error) {
        console.error('Login error:', error);
        setMessage('An error occurred during login. Please try again.');
      } finally {
        setLoading(false); // End loading
      }
    } else {
      setMessage('Please enter your email and password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </button>
        {message && <p className="message">{message}</p>}
      </form>
      <p style={{ color: 'green' }}> {/* Change to your desired color */}
    Don't have an account?{' '}
    <a 
        href="#sign-up" 
        onClick={() => handleSectionClick('SignUp')} 
        style={{ color: 'blue' }} // Change to your desired link color
    >
        Sign Up
    </a>
</p>

    </div>
  );
}

export default Login;
