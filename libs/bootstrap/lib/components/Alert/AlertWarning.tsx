import * as React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Alert } from 'react-bootstrap'

export function AlertWarning({ children }: any) {
  return (
    <>
      <Alert variant='warning'>
        <div className='d-flex'>
          <FaExclamationTriangle className='me-2 mt-1' />
          <div>{children}</div>
        </div>
      </Alert>
    </>
  )
}

export default AlertWarning
