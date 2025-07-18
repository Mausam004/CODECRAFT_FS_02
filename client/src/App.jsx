import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import DepartmentList from './components/DepartmentList';
import SalaryList from './components/SalaryList';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/employee-list" element={<EmployeeList/>}/>
      <Route path="/department-list" element={<DepartmentList/>}/>
      <Route path="/salary-list" element={<SalaryList/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
