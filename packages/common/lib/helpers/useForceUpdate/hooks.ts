import React from 'react'

export function useForceUpdate() {
  const [value, setValue] = React.useState(0) // integer state
  const forceUpdate = () => setValue((value) => value + 1) // update the state to force render

  return { counter: value, forceUpdate }
}
