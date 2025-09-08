import React from 'react'

export default function AddUser() {
  return (
    <section className='add-user p-3'>
      <h2 className='fs-3 fw-medium lh-sm'>Add User</h2>
      <div className="row mt-5">
        <div className="col-lg-12 mb-3">
          <label for="userName" className="form-label fs-5 fw-semibold">Name</label>
          <input type="text" className="form-control form-control-lg fs-6 fw-normal" id="userName" />
        </div>
        <div className="col-lg-12 mb-3">
          <label for="userEmail" className="form-label fs-5 fw-semibold">Email</label>
          <input type="email" className="form-control form-control-lg fs-6 fw-normal" id="userEmail" />
        </div>
        <div className="col-lg-12 mb-3">
          <label for="userPass" className="form-label fs-5 fw-semibold">User Password</label>
          <input type="password" className="form-control form-control-lg fs-6 fw-normal" id="userPass" />
        </div>
        <div className="mb-3">
          <input type="submit" className='btn btn-lg btn-primary' value='Submit' />
        </div>
      </div>
    </section>
  )
}
