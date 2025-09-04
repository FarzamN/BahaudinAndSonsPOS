import React from 'react'

export default function Login() {
  return (
    <div className='vh-100'>
      <div className='d-flex align-items-center justify-content-center mx-auto w-50 h-100'>
        <div className="row w-100 bg-white shadow rounded-4 py-5 px-4">
          <div className="col-12 text-center mb-3">
            <h1 className='fs-1 fw-semibold lh-sm'>Login Form</h1>
          </div>
          <div className="col-12 mb-3">
            <label for="login_email" className='form-label fs-6 fw-medium lh-sm text-black'>Email</label>
              <input type='email' className='form-control form-control-lg fs-6 fw-normal lh-sm text-black' id='login_email' placeholder='Enter your email ...' />
          </div>
          <div className="col-12 mb-3">
            <label for="login_password" className='form-label fs-6 fw-medium lh-sm text-black'>Password</label>
              <input type='password' className='form-control form-control-lg fs-6 fw-normal lh-sm text-black' id='login_password' placeholder='Enter your password' />
          </div>
          <div className="col-12 text-center">
              <input type='submit' className='btn btn-lg btn-primary' id='login_btn' value='Submit' />
          </div>
        </div>
      </div>
    </div>
  )
}
