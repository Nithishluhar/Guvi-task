import { useState } from "react";
import "./App.css";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Url from "./components/UrlComponents/Url";
import Login from "./components/UserComponents/Login";
import ForgetPass from "./components/UserComponents/ForgetPass";
import Dasboard from "./components/Dasboard";
import Signup from "./components/UserComponents/Signup";
import List from "./components/UrlComponents/List";
import EmailVerify from "./components/UserComponents/EmailVerify";
import PasswordReset from "./components/UserComponents/PasswordReset";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // console.log(token);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    console.log("logout");
    navigate("/");
  };

  return (
    <>
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to={"/"} title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://camo.githubusercontent.com/56ea24702a43a27f55794275849e38c16cd393e244a59297a71266b9b34e3e53/68747470733a2f2f617368616c6c656e64657369676e2e636f2e756b2f696d616765732f637573746f6d2f73686f72742d75726c2d6c6f676f2e706e67"
                  alt=""
                />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to={"/"}
                title=""
                className="text-base text-black transition-all duration-200 hover:text-white"
              >
                {" "}
                Dashboard
              </Link>

              <Link
                to={"/url"}
                title=""
                className="text-base text-black transition-all duration-200 hover:text-white"
              >
                Url shortener
              </Link>

              <Link
                to={"/list"}
                title=""
                className="text-base text-black transition-all duration-200 hover:text-white"
              >
                Urls List
              </Link>

              <Link
                title=""
                className="text-base text-black transition-all duration-200 hover:text-white"
                onClick={logout}
              >
                {" "}
                Logout
              </Link>
            </div>

            <Link
              to={"/signup"}
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-indigo-800 rounded-full"
              role="button"
            >
            { token ? "✓": "Sign Up⌛"}
            </Link>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Dasboard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login setToken={setToken} />}></Route>
        <Route path="/forget" element={<ForgetPass />}></Route>
        <Route path="/user/:id/verify/:token" element={<EmailVerify />}></Route>
        <Route path="/user/:id/resetlink/:token" element={<PasswordReset />} />

        <Route
          path="/url"
          element={token ? <Url /> : <Navigate to="/"></Navigate>}
        ></Route>
        <Route
          path="/list"
          element={token ? <List /> : <Navigate to="/"></Navigate>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
