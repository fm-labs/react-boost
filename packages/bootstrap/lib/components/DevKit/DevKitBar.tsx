import React from 'react'
import { Button } from 'react-bootstrap'
import { FaRocket, FaTimes } from 'react-icons/fa'
import './DevKit.scss'

export interface IDevKitPanel {
  key: string
  label: string
  render: () => React.ReactElement
}

export interface DevKitBarProps {
  panels: IDevKitPanel[]
}

export function DevKitBar({panels}: DevKitBarProps) {
  const [mini, setMini] = React.useState<boolean>(true)
  const [active, setActive] = React.useState<boolean>(false)
  const [activeKey, setActiveKey] = React.useState<string>('dev')


  const activePanel = panels.find((item) => item.key === activeKey)

  const buildClassName = () => {
    const classes = ['DevKitBar']
    if (active) {
      classes.push('DevKitBar-active')
    }
    if (mini) {
      classes.push('DevKitBar-mini')
    }

    return classes.join(' ')
  }

  return process.env.NODE_ENV === 'development' ? (
    <div id='DevKit' className={buildClassName()}>
      <div className='DevKitBar-Container'>
        <div className='DevKitBar-Content'>
          <div className='DevKitBar-Header d-flex justify-content-between'>
            <h1>{activePanel?.label}</h1>
            <Button variant='outline-secondary' onClick={() => setActive(false)}>
              <FaTimes />
            </Button>
          </div>
          {activeKey && activePanel ? (
            activePanel.render()
          ) : (
            <h1>Ups. Panel '{activeKey}' not found</h1>
          )}
        </div>
      </div>
      <div className='DevKitBar-Toggle'>
        <ul>
          <li onClick={() => setMini(!mini)}>
            <FaRocket />
          </li>
          {panels.map((panel) => (
            <li
              key={panel.key}
              onClick={() => {
                setActiveKey(panel.key)
                setActive(true)
              }}
            >
              {panel.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default DevKitBar
