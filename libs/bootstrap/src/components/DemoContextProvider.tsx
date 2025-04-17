import React, { PropsWithChildren } from 'react'
import { DemoComponent } from '../demos.ts'

type DemoContextType = {
  currentComponent: DemoComponent | null
  setCurrentComponent: (component: DemoComponent) => void
}

export const DemoContext = React.createContext<DemoContextType | null>(null)

const DemoContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [currentComponent, setCurrentComponent] = React.useState<DemoComponent | null>(null)

  return (
    <DemoContext.Provider
      value={{ currentComponent: currentComponent, setCurrentComponent: setCurrentComponent }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export default DemoContextProvider
