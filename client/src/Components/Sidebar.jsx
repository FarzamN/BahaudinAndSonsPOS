import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();

    navigate("/Login");
  };

  return (
    <aside className='sidebar bg-white shadow p-3 d-flex flex-column h-100'>
      <div className="logo mb-4">
        <h1 className='fs-2 fw-semibold lh-sm'>Site Logo</h1>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'><Link to="/dashboard" className='nav-link'>Dashboard</Link></li>
        <li className='nav-item'><Link to="/Inventories" className='nav-link'>Inventory</Link></li>
        <li className='nav-item'><Link to="/Orders" className='nav-link'>Orders</Link></li>
        <li className='nav-item'><Link to="/Users" className='nav-link'>Users</Link></li>
      </ul>
      <div className='d-block mt-auto'>
        <button 
          type='button' 
          className='btn btn-danger w-100'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </aside>
  )
}