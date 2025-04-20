// https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e

import React, { MutableRefObject } from 'react'

export const useEffectOnce = (effect: () => void | (() => void)) => {
  const destroyFunc: MutableRefObject<void | (() => void) | null> = React.useRef<
    void | (() => void) | null
  >(null)
  const effectCalled: MutableRefObject<boolean | null> = React.useRef(false)
  const renderAfterCalled: MutableRefObject<boolean | null> = React.useRef(false)
  const [, setVal] = React.useState<number>(0)

  if (effectCalled.current) {
    renderAfterCalled.current = true
  }

  React.useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect()
      effectCalled.current = true
    }

    // this forces one render after the effect is run
    setVal((val) => val + 1)

    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return
      }
      if (destroyFunc.current) {
        destroyFunc.current()
      }
    }
  }, [effect])
}
