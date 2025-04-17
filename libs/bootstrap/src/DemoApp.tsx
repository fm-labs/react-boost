import './DemoApp.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'

function DemoApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default DemoApp
