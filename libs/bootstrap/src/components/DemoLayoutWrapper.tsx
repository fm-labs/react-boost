import React from 'react'
import DemoLayout from './DemoLayout.tsx'
import { Outlet } from 'react-router-dom'

const DemoLayoutWrapper = () => {
  return (
    <DemoLayout>
      <Outlet />
    </DemoLayout>
  )
}

export default DemoLayoutWrapper
