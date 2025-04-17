import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { FaSpinner } from 'react-icons/fa'

const AuthLogoutPage = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('auth_user')
    toast.success('You are logged out now :)')
    navigate('/auth/login?logout=1')
  }

  React.useEffect(() => {
    const timer = setTimeout(logout, 3000)

    return () => {
      toast.clearWaitingQueue()
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <div className={'text-center'}>
      <FaSpinner size={50} className={'spin'} />
      <h1 className='h3 my-3 fw-normal'>Logout</h1>
      <p>Closing your session ...</p>
    </div>
  )
}

export default AuthLogoutPage
