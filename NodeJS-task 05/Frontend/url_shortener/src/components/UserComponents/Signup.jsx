import React, { useState } from "react";
import Backround from "../Backround";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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
        "http://localhost:8000/user/register",
        formData
      );
      setMsg(response.data.message);

      console.log(response.data.message);
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
            <h1 className="mb-5 text-secondary">Create Your Account</h1>

            <div className="inputContainer">
              <b>
                First Name<span>*</span>
              </b>
              <input
                type="text"
                name="firstname"
                className="input"
                placeholder="Enter First Name"
                onChange={handleChange}
                value={formData.username}
                required
              />
            </div>
            <div className="inputContainer">
              <b>
                Last Name <span>*</span>
              </b>
              <input
                type="text"
                name="lastname"
                className="input"
                placeholder="Enter Last name "
                onChange={handleChange}
                value={formData.lastname}
                required
              />
            </div>

            <div className="inputContainer">
              <b>
                Email<span>*</span>
                <br />
                <br />
              </b>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div className="inputContainer">
              <b>
                Password<span>*</span>
                <br />
                <br />
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
              <button typeof="submit">Signup Now</button>
            </div>
            <p>
              <b style={{ wordSpacing: "5px" }}> If you have account, Please</b>
              <Link to="/login" style={{ color: "yellow", wordSpacing: 2 }}>
                {" "}
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Backround />
    </>
  );
}

export default Signup;
