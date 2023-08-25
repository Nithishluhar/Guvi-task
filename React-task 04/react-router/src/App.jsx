import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DataSc from "./DataSc";
import Security from "./Security";
import Career from "./Career";
import FullStake from "./FullStake";
import AllFeild from "./AllFeild";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <nav class="navbar sticky-top navbar-expand-lg bg-light ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img src="logo.png" alt="logo" height={50} /> 
            </a>
            <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    ₹Price
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav><br />
        <div className="container">
          <img 
            className="img"
            src="title.png"
            alt="image"
            height={184}
          />
        </div><br />
        <Router>
          <nav class="navbar sticky-top navbar-expand-lg navbar-light  shadow-sm  bg-info">
            <div className="container px-4 px-lg">
              <h4 className="navbar-toggler">Menu</h4>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item px-3 fw-bold">
                    <Link class="nav-link " to="/">
                      All
                    </Link>
                  </li>
                  <li class="nav-item px-3 fw-bold ">
                    <Link class="nav-link " to="/full-stack-development">
                      Full-Stack Development
                    </Link>
                  </li>
                  <li class="nav-item px-3 fw-bold">
                    <Link class="nav-link " to="/data-science">
                      Data Science
                    </Link>
                  </li>
                  <li class="nav-item px-3 fw-bold">
                    <Link class="nav-link " to="/cyber-security">
                      Cyber Security
                    </Link>
                  </li>
                  <li class="nav-item px-3 fw-bold">
                    <Link class="nav-link " to="/career">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" exact Component={AllFeild}></Route>
            <Route path="/full-stack-development" Component={FullStake}></Route>
            <Route path="/data-science" Component={DataSc}></Route>
            <Route path="/cyber-security" Component={Security}></Route>
            <Route path="/career" Component={Career}></Route>
          </Routes>
        </Router>
        <footer className=" py-5 bg-info mt-5">
          <div className="container text-center">
            <p className="m-0 text-center text-white">Copyrights © → 2023</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
