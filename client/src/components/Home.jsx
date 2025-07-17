import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      <h1>Welcome to Employee Management System</h1>
      <p>Log in to manage your dashboard.</p>
      <button onClick={handleNavigate}>Login</button>
    </>
  );
}