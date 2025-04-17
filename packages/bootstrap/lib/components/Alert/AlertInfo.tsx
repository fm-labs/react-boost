import * as React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Alert } from 'react-bootstrap'

export function AlertInfo({ children }: any) {
  return (
    <>
      <Alert variant='info'>
        <div className='d-flex'>
          <FaInfoCircle className='me-2 mt-1' />
          <div>{children}</div>
        </div>
      </Alert>
    </>
  )
}

export default AlertInfo
