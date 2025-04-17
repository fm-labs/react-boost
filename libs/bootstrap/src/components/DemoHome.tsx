import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { DemoContext } from './DemoContextProvider.tsx'

const DemoHome = () => {
  const demoContext = React.useContext(DemoContext)!

  const renderCurrentComponent = () => {
    if (!demoContext.currentComponent) return null
    const [name, Component] = demoContext.currentComponent
    return <Component />
  }

  return (
    <div>
      <div>{renderCurrentComponent()}</div>
    </div>
  )
}

export default DemoHome
