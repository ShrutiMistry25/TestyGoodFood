import React, { useState, useEffect } from 'react';
import logo from '../assets/img/TestyGoodFood.png';
import { Link } from 'react-router-dom';
import useOnline from '../Hooks/useOnline';
import { useAuth } from '../Hooks/useAuth';
import { useSelector } from 'react-redux';


const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="TestyGoodFood Logo" />
    </a>
  );
};

const Header = () => {
  
  const { isLoggedIn, logout, login } = useAuth();

  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from localStorage
    const userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
    if (userLoginData) {
      setUsername(userLoginData.name);
    }
  }, [isLoggedIn]);

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="header">
      <Title />
      {isLoggedIn && <h1 className="user-name">Welcome, {username}!</h1>}
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li><Link to="/help" className="link">Help</Link></li>
          <li><Link to="/cart" className="link">Cart <span className="cart">{cartItems.length}</span></Link></li>
          {isLoggedIn ? (
            <button className="logout" onClick={logout}>Logout <span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span></button>
          ) : (
            <Link to="/login"><button className="login" onClick={login}>Login <span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span></button></Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
