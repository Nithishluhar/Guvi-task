import React, { useState } from "react";
import Backround from "../Backround";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setToken }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        formData
      );
      console.log(response.data.data);
      setMsg(response.data.message);
      // const {token} = response.data.data
      localStorage.setItem("token", response.data.data);
      setError("");
      setToken(response.data.data);

      setTimeout(() => navigate("/url"), 1000);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="inputContainer">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-5 text-secondary">Login</h1>
            <br />
            <div className="inputContainer">
              <b>
                Email<span>*</span>
              </b>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Email"
                onChange={handleChange}
                value={formData.email}
                
              />
            </div>

            <div className="inputContainer">
              <b>
                Password<span>*</span>
              </b>
              <input
                type="password"
                name="password"
                className="input"
                placeholder=" Password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            {error && <div className="error_msg">{error}</div>}
            {msg && <div className="success_msg">{msg}</div>}
            <div>
              <button typeof="submit">Login Now</button>
            </div>
          </form>
          <Link to="/forget" style={{ color: "white", wordSpacing: 2 }}>
            forgot password
          </Link>
          <p>
            <b style={{ wordSpacing: "5px" }}>If you have no account, Please</b>
            <Link to="/signup" style={{ color: "yellow", wordSpacing: 2 }}>
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <Backround />
    </>
  );
}

export default Login;
