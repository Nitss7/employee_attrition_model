import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/App_S.css';
import '../styles/AnimatedLogo.css';
import AnimatedLogo from '../components/AnimatedLogo';

const LoginPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSignedIn(true);
  };

  const handleHomeClick = () => {
    console.log('Home button clicked');
  };

  return (
    <div className="signup-page">
      <nav className="nav-bar">
        <AnimatedLogo />
        <button className="home-button" onClick={handleHomeClick}>Home</button>
      </nav>
      <div className="signup-link">
        <p>Not a user? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div className="login-container">
        {isSignedIn ? (
          <p>You are already signed in.</p>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <h1>Login</h1>
            <div className="form-row">
              <label>Username:</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
             
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    
     

    </div>
  );
};

export default LoginPage;
