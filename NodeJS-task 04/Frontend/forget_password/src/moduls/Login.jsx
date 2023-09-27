import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({setToken}) {
  
  const [email, setEmail] = useState();
  const [password, setPasswaord] = useState();
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/login',{ email,password});
        const { token } = response.data;
        setToken(token); // Store the token in your app.js state
        localStorage.setItem('token', token);
        navigate('/dashboard')
    } catch (error) {
        console.error(error.response.data.mess);
        
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-50 ">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control bg-info"
                id="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Password:
              </label>
              <input
                type="text"
                className="form-control bg-info"
                id="password"
                placeholder="password"
                onChange={(e) => setPasswaord(e.target.value)}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="btn btn-primary ">login</button>
              <br />
                 <Link to="/reset">forgot-password</Link>
              <br />
              <b> If you have no Account 
                <br />
                 ⇛Create account </b>
              <br />
              <Link to="/register" className="btn btn-danger">
                Create!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
