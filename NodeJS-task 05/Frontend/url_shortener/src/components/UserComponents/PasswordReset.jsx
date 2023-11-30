import { useEffect, useState, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Backround from "../Backround";

const PasswordReset = () => {
  const Navigate = useNavigate();
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const param = useParams();
  const url = `https://url-shortener-83vp.onrender.com/user/${param.id}/reset_password/${param.token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
        console.log(error);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { password });
      setMsg(response.data.message);
      console.log(response);
      setError("");
      setTimeout(() => (window.location = "/login"), 1500);
      // Navigate("/login")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error);
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <div>
    <Fragment>
      {validUrl ? (
        <div className="container">
          <div className="inputContainer">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-5 text-secondary">Add New Password</h1>
              <div className="inputContainer">
                <b>
                  Password<span>*</span>
                </b>
                <input
                 className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              {error && <div className="error_msg">{error}</div>}
              {msg && <div className="success_msg">{msg}</div>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
    <Backround/>
    </div>
  );
};

export default PasswordReset;
