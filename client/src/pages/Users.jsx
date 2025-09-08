import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Users() {
    const navigate = useNavigate()
    if (!localStorage.getItem('token')) {
      navigate('/Login')
    }
  return (
    <section className='users p-3'>
      <div className="d-flex justify-content-between">
        <h2 className='fs-3 fw-medium lh-sm mb-0'>All Users</h2>
        <Link to="/AddUser" className='btn btn-primary fs-6 fw-medium lh-sm'>Add User</Link>
      </div>
      <div className='table-responsive mt-5'>
        <table class="table table-bordered ">
            <thead class="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th scope="row">1</th>
                    <td>Ali raza</td>
                    <td>ali@gmail.com</td>
                    <td>************</td>
                </tr>
            </tbody>
        </table>
      </div>
    </section>
  )
}
