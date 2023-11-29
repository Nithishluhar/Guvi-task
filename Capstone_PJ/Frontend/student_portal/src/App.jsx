import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./Components/Signup";
import AllTask from "./Components/AllTask";
import Completed from "./Components/Completed";
import Incomplete from "./Components/Incomplete";
import Dashboard from "./Components/Dashboard";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // console.log(token);
  const [name, setName] = useState(useState(localStorage.getItem("name") || ""));
  console.log(name);
  return (
    <>
      {token && <Dashboard setToken={setToken} name={name} />}
      <Routes>
        <Route
          path="/"
          element={<Login setToken={setToken} setName={setName} />}
        ></Route>
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/alltask"
          element={token ? <AllTask /> : <Navigate to="/"></Navigate>}
          // element={<AllTask/>}
        ></Route>
        <Route
          path="/completed"
          element={token ? <Completed /> : <Navigate to="/"></Navigate>}
        ></Route>
        <Route
          path="/incomplete"
          element={token ? <Incomplete /> : <Navigate to="/"></Navigate>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
