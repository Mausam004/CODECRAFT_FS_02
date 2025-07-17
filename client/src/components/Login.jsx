import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newValues = { email, password };

        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", newValues);
            console.log("Response Data:", response.data);

            if (response.data.Login) {
                const token = response.data.token;
                const user = response.data.user; 
                
                if (token && user) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));  
                    console.log('Token and user stored:', token, user);
                } else {
                    console.log('Token or user data is missing in the response');
                }
                
                toast.success("Login Successful");
                setTimeout(() => navigate("/dashboard"), 1000);
            } else {
                toast.error("No record found");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error occurred. Try again.");
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                        className="login-input"
                            type="text"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                        className="login-input"
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;