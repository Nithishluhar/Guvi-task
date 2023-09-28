import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasswaord] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://forget-password-7q2c.onrender.com/register", { name, email, password })
      .then((res) => {
        navigate('/login')
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-2 rounded w-50 ">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label ">
                Name
              </label>
              <input
                type="text"
                className="form-control  bg-info  "
                id="name"
                placeholder="user name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
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
              <button className="btn btn-primary ">Register</button>
              <br />
              <b> Already have an account 🪄 </b>
              <br />
              <Link to="/login" className="btn btn-danger">
                Login here!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
