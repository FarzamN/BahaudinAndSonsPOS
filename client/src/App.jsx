import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import AddItems from './pages/AddItems'
import AddOrder from './pages/AddOrder'
import Orders from './pages/Orders'
import AddInventory from './pages/AddInventory'
import Inventories from './pages/Inventories'
import Login from './pages/Login'

export default function App() {
 const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.setItem("token", "dasdsad")
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [token]);
  return (
    <div className="container-fluid ps-0 vh-100">
      <div className="row h-100">
        <div className="col-lg-3">
          {login && < Sidebar /> }
        </div>
        <div className="col-lg-9">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addItems" element={<AddItems />} />
            <Route path="/addOrder" element={<AddOrder />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/addInventory" element={<AddInventory />} />
            <Route path="/Inventories" element={<Inventories />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
