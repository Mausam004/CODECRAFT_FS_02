import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">
        <span className="line-start">Welcome</span>
        <span className="line-indent">to</span>
        <span className="line-closer">Employee</span> 
        <span className='line-end'> Management System</span></h1>
        <span className="home-subtitle">Log in to manage your dashboard.</span>
        <button className="home-login-btn" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
