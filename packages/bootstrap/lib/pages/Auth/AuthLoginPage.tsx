import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'

const AuthLoginPage = () => {
  const navigate = useNavigate()

  const onLoginSubmit = () => {
    localStorage.setItem('auth_user', 'root')
    toast.success('Login successful')
    setTimeout(() => navigate('/'))
  }

  React.useEffect(() => {
    // check login state
    const authUser = localStorage.getItem('auth_user')
    let timer: any
    if (authUser) {
      //toast.info("Already authenticated")
      timer = setTimeout(() => navigate('/'))
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  })

  return (
    <div className={'form-signin m-auto text-center'}>
      <form>
        <h1 className='h3 my-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <Button size={'lg'} className='w-100' type='submit' onClick={onLoginSubmit}>
          Sign in
        </Button>
        <p className='mt-5 mb-3 text-muted'>Password forgotten?</p>
      </form>
    </div>
  )
}

export default AuthLoginPage
