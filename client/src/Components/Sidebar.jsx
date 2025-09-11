import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components/SidebarStyle.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/Login");
    window.location.reload();
  };

  return (
    <aside className="sidebar bg-white shadow p-3 d-flex flex-column h-100">
      <div className="logo mb-4">
        <h1 className="fs-2 fw-semibold lh-sm">Site Logo</h1>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Inventories"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Inventory
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Orders"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Orders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Users"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Users
          </NavLink>
        </li>
      </ul>
      <div className="d-block mt-auto">
        <button
          type="button"
          className="btn btn-danger w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
