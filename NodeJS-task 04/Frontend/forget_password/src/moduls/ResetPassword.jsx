import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://forget-password-7q2c.onrender.com/reset_password/${id}/${token}`,
        {
          password,
        }
      );
      if (response.data.status === "success") {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-5">
          <h4 className="App text-center">Forgot Password</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control bg-info"
                id="password"
                placeholder="set_pasword"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="btn btn-primary " type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
