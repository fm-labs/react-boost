import React from 'react'
import { Outlet } from 'react-router-dom'
//import "../bootstrap/Bootstrap.scss";
import './AuthLayout.scss'

function AuthLayout() {
  return (
    <div className={'Auth-wrapper'}>
      <main className='Auth-main w-100 m-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
