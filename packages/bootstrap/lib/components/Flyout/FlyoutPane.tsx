import React from 'react'
import { Button } from 'react-bootstrap'
import { FaDesktop, FaExpandArrowsAlt, FaMobileAlt, FaTabletAlt, FaTimes } from 'react-icons/fa'
import './FlyoutPane.scss'
import useFlyout from './useFlyout'
import { FlyoutPaneSize, FlyoutPaneVariant } from './FlyoutPane.types'

export interface FlyoutPaneProps extends React.PropsWithChildren {
  heading?: string
  size?: FlyoutPaneSize
  visible?: boolean
  variant?: FlyoutPaneVariant
  onShow?: (any?: any) => any
  onHide?: (any?: any) => any
}

export function FlyoutPane({ heading, size, variant, visible, children }: FlyoutPaneProps) {
  const flyout = useFlyout()

  const getClassName = (): string => {
    const classes = ['FlyoutPane']
    if (size) {
      classes.push('FlyoutPane-' + size)
    }
    if (variant) {
      classes.push('FlyoutPane-' + variant)
    }
    if (visible) {
      classes.push('FlyoutPane-show')
    }
    return classes.join(' ')
  }

  return (
    <aside className={getClassName()}>
      <div className='FlyoutPane-Header'>
        <div className='FlyoutPane-Close'>
          {/*<FaTimes onClick={() => flyout.setFlyout(null)}/>*/}
          {/*<IconButton icon={FaTimes} variant='link' size='sm' onClick={() => flyout.hideFlyout()} />*/}
          <FaTimes onClick={() => flyout.hideFlyout()} />
        </div>
        <div style={{ flexGrow: 1 }}>
          <div className='d-flex justify-content-between'>
            <div className='h3 my-0'>{heading}</div>
            <div>
              {/*<Button variant="outline-secondary" size="sm"*/}
              {/*        onClick={() => flyout.setFlyoutSize("default")}>*/}
              {/*    <FaExpand />*/}
              {/*</Button>*/}
              <Button
                variant='outline-primary'
                size='sm'
                onClick={() => flyout.setFlyoutSize('full')}
              >
                <FaExpandArrowsAlt />
              </Button>
              <Button
                variant='outline-secondary'
                size='sm'
                onClick={() => flyout.setFlyoutSize('lg')}
              >
                <FaDesktop />
              </Button>
              <Button
                variant='outline-secondary'
                size='sm'
                onClick={() => flyout.setFlyoutSize('md')}
              >
                <FaTabletAlt />
              </Button>
              <Button
                variant='outline-secondary'
                size='sm'
                onClick={() => flyout.setFlyoutSize('sm')}
              >
                <FaMobileAlt />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='FlyoutPane-Content'>{flyout.flyoutComponent || children || 'No content'}</div>
    </aside>
  )
}

export default FlyoutPane
