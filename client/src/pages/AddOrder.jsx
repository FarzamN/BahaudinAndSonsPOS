import React from 'react'
import { useNavigate } from 'react-router'

export default function AddOrder() {
  const navigate = useNavigate()
  if (!localStorage.getItem('token')) {
    navigate('/Login')
  }
  return (
    <section className='add-order p-3'>
      <h2 className='fs-3 fw-medium lh-sm'>Add Order</h2>
      <div className="row mt-5">
        <div className="col-lg-6 mb-3">
          <label for="size" className="form-label fs-5 fw-semibold">Size</label>
          <input type="text" className="form-control form-control-lg fs-6 fw-normal" id="size" />
        </div>
        <div className="col-lg-6 mb-3">
          <label for="guage" className="form-label fs-5 fw-semibold">Guage</label>
          <select class="form-select form-select-lg fs-6 fw-normal" id='guage'>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-4 mb-3">
          <label for="qty" className="form-label fs-5 fw-semibold">Quantity</label>
          <input type="number" className="form-control form-control-lg fs-6 fw-normal" id="qty" />
        </div>
        <div className="col-lg-4 mb-3">
          <label for="price" className="form-label fs-5 fw-semibold">Price</label>
          <input type="number" className="form-control form-control-lg fs-6 fw-normal" id="price" />
        </div>
        <div className="col-lg-4 mb-3">
          <label for="date" className="form-label fs-5 fw-semibold">Date</label>
          <input type="date" className="form-control form-control-lg fs-6 fw-normal" id="date" />
        </div>
        <div className="col-lg-6 mb-3">
          <label for="inventory-model" className="form-label fs-5 fw-semibold">Inventory Model</label>
          <input type="text" className="form-control form-control-lg fs-6 fw-normal" id="inventory-model" />
        </div>
        <div className="col-lg-6 mb-3">
          <label for="customer_name" className="form-label fs-5 fw-semibold">Customer Name</label>
          <input type="text" className="form-control form-control-lg fs-6 fw-normal" id="customer_name" />
        </div>
        <div className="col-lg-6 mb-3">
          <label for="total_price" className="form-label fs-5 fw-semibold">Total price after discount</label>
          <input type="number" className="form-control form-control-lg fs-6 fw-normal" id="customer_name" />
        </div>
        <div className="col-lg-6 mb-3">
          <label for="discount_percentage" className="form-label fs-5 fw-semibold">Discount in percentage</label>
          <input type="number" className="form-control form-control-lg fs-6 fw-normal" id="discount_percentage" />
        </div>
        <div className="mb-3">
          <input type="submit" className='btn btn-lg btn-primary' value='Submit' />
        </div>
      </div>
    </section>
  )
}
