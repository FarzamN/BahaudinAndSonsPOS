import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Inventories() {
    const navigate = useNavigate()
    if (!localStorage.getItem('token')) {
        navigate('/Login')
    }
  return (
    <section className='all-inventories p-3'>
        <div className="d-flex justify-content-between">
            <h2 className='fs-3 fw-medium lh-sm mb-0'>Inventories</h2>
            <Link to="/AddInventory" className='btn btn-primary fs-6 fw-medium lh-sm'>Add Inventory</Link>
        </div>
        <div className='table-responsive mt-5'>
            <table class="table table-bordered ">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Size</th>
                        <th scope="col">Gauge</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price per unit</th>
                        <th scope="col">Merchant Name</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </section>
  )
}
