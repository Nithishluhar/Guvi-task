import React, { useState } from "react";
import Backround from "../Backround";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://url-shortener-83vp.onrender.com/user/reset`;
      const  response = await axios.post(url, { email });
      console.log(response.data.message);
      setMsg(response.data.message);
      setError("");
      console.log(email);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="inputContainer">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-5 text-secondary">Forgot Email</h1>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            {error && <div className="error_msg">{error}</div>}
            {msg && <div className="success_msg">{msg}</div>}
            <div className="inputContainer">
              <button type="submit">
                <Link to="/forget" style={{ color: "yellow", wordSpacing: 2 }}>
                  Send
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Backround />
    </>
  );
}

export default ForgetPass;
