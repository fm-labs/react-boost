import React from 'react'
import { demoComponents } from '../demos.ts'
import { DemoContext } from './DemoContextProvider.tsx'

const DemoNavigationMenu = () => {
  const { currentComponent, setCurrentComponent } = React.useContext(DemoContext)!
  return (
    <div>
      <ul>
        {demoComponents.map((component) => {
          return (
            <li key={component[0]} onClick={() => setCurrentComponent(component)}>
              {component[0]}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DemoNavigationMenu
