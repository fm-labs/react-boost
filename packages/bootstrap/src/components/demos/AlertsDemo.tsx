import React from 'react'
import { AlertDanger, AlertInfo, AlertSuccess, AlertWarning } from '../../../lib/components/Alert'

const AlertsDemo = () => {
  return (
    <div>
      <h1>Alert Demo</h1>
      <AlertSuccess>Success!</AlertSuccess>
      <AlertInfo>Info!</AlertInfo>
      <AlertWarning>Last warning!</AlertWarning>
      <AlertDanger>Boom!</AlertDanger>
    </div>
  )
}

export default AlertsDemo
