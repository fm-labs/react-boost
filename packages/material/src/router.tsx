import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import DemoHome from './components/DemoHome.tsx'
import DemoDashboardLayoutRoutingWrapper from './layout/DemoDashboardLayoutRoutingWrapper.tsx'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DemoDashboardLayoutRoutingWrapper />,
    children: [
      { index: true, element: <DemoHome /> },
      {
        path: 'demo',
        children: [],
      },
      // {
      //   path: '/redirect',
      //   element: <Navigate replace={true} to={'/aws/dashboards/compute/928655916478'} />,
      // },
      { path: '*', element: <>PAGE NOT FOUND</> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
