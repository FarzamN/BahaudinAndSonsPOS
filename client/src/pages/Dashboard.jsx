import React from 'react'
import { useNavigate } from 'react-router'

export default function Dashboard() {
  const navigate = useNavigate()
  if (!localStorage.getItem('token')) {
    navigate('/Login')
  }
  return (
    <div>Dashboard</div>
  )
}
