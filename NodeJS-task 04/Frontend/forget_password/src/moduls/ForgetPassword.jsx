import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgetPassword() {
    const [email, setEmail] = useState();
    const navigate = useNavigate();
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      try {
          const response = await axios.post('https://forget-password-7q2c.onrender.com/reset',{ email});
          if (response.data.status === "success") {
            navigate('/login')
          }
         
      } catch (error) {
          console.error(error);
      }
    };

  return (
    <>
 <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h4  className='App text-center'>Forgot Email Address</h4>
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
            <div style={{ textAlign: "center" }}>
              <button className="btn btn-primary " type="submit">Send</button>
              <br /><br />
              <Link to="/register" className="btn btn-danger">
                Regiter!
              </Link>
            </div>
          </form>
        </div>
      </div>// 14.20.1"
    </>
  )
}

export default ForgetPassword

