import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayoutWrapper() {
  return (
    <div className='App-wrapper'>
      <Outlet />
    </div>
  )
}

export default AuthLayoutWrapper
