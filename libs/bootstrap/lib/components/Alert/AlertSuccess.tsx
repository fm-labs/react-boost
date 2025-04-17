import * as React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Alert } from 'react-bootstrap'

export function AlertSuccess({ children }: any) {
  return (
    <>
      <Alert variant='success'>
        <div className='d-flex'>
          <FaCheckCircle className='me-2 mt-1' />
          <div>{children}</div>
        </div>
      </Alert>
    </>
  )
}

export default AlertSuccess
