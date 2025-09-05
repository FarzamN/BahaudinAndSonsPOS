import React from 'react'
import '../style/Sidebar.css';
export default function Sidebar() {
  return (
    <aside className='sidebar bg-white shadow p-3  d-flex flex-column h-100'>
      <div className="logo mb-4">
        <h1 className='fs-2 fw-semibold lh-sm'>Site Logo</h1>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'><a href="#" className='nav-link'>Dashboard</a></li>
        <li className='nav-item'><a href="#" className='nav-link'>Inventory</a></li>
        <li className='nav-item'><a href="#" className='nav-link'>Orders</a></li>
        <li className='nav-item'><a href="#" className='nav-link'>Users</a></li>
      </ul>
      <div className='d-block mt-auto'>
        <a href="#" className='btn btn-danger w-100'>Logout</a>
      </div>
    </aside>
  )
}
