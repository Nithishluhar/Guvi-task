import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav class="navbar sticky-top navbar-expand-lg navbar-light  shadow-sm  bg-info">
          <div className="container px-4 px-lg">
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
                    <h3> Users </h3>
                  </Link>
                </li>
                <li class="nav-item px-3 fw-bold">
                  <Link class="nav-link " to="/create">
                    <button className="btn btn-dark">Create +</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
