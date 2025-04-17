import React, { PropsWithChildren } from 'react'

export const DevOnly = ({ children }: PropsWithChildren<any>) => {
  if (process.env.NODE_ENV !== 'development') return null
  return (
    <div className={'DevOnly'}>
      <div className={'DevOnly-Header'}>Debug Output:</div>
      <div className={'DevOnly-Content'}>{children}</div>
    </div>
  )
}
