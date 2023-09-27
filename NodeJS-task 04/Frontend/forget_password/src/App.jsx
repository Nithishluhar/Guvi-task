import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./moduls/Signup";
import Login from "./moduls/Login";
import Create from "./moduls/Create";
import { useState } from "react";
import Dashboard from "./moduls/Dashboard";
import ForgetPassword from "./moduls/ForgetPassword";
import ResetPassword from "./moduls/ResetPassword";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');


  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <Router>
     <div >
        <header className='App text-center'>
          <h1>Email Authentication</h1>
          {token && <button onClick={logout} className="btn btn-danger ">Logout</button>}  
        </header>  
        <main>
      <Routes>
        <Route path="/" element={<Create />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login setToken={setToken} />}></Route>
        <Route path="/dashboard" element={token ? <Dashboard/> : <Navigate to='/login'></Navigate>}></Route>
        <Route path="/reset" element={<ForgetPassword/>}></Route>
        <Route path="/reset_password/:id/:token" element={<ResetPassword/>}></Route>
      </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
