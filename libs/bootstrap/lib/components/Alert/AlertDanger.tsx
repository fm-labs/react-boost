import * as React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'
import { Alert } from 'react-bootstrap'

export function AlertDanger({ children }: any) {
  return (
    <>
      <Alert variant='danger'>
        <div className='d-flex'>
          <FaExclamationCircle className='me-2 mt-1' />
          <div>{children}</div>
        </div>
      </Alert>
    </>
  )
}

export default AlertDanger
