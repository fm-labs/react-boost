import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import DemoHome from './components/DemoHome.tsx'
import DemoLayoutWrapper from './components/DemoLayoutWrapper.tsx'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DemoLayoutWrapper />,
    children: [
      { index: true, element: <DemoHome /> },
      // {
      //   path: 'demo',
      //   children: [
      //     {
      //       path: 'alerts',
      //       element: <AlertsDemo />,
      //     },
      //   ],
      // },
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
