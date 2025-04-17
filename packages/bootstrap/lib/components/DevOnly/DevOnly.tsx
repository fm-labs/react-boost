import React, { PropsWithChildren } from 'react'

export const DevOnly = (props: PropsWithChildren<any>) => {
  return process.env.NODE_ENV === 'development' ? props.children : <></>
}
