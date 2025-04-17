import React from 'react'
import { Outlet } from 'react-router-dom'
import DemoDashboardLayout from './DemoDashboardLayout'

const DemoDashboardLayoutRoutingWrapper = () => {
  return (
    <>
      <DemoDashboardLayout>
        <Outlet />
      </DemoDashboardLayout>
    </>
  )
}

export default DemoDashboardLayoutRoutingWrapper
