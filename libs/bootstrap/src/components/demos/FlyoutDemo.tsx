import React from 'react'
import { ProvideFlyout, useFlyout } from '../../../lib/components/Flyout'
import { Button } from 'react-bootstrap'

const FlyoutDemoPanel1 = () => {
  return (
    <div>
      <h1>Flyout Panel 1</h1>
    </div>
  )
}

const FlyoutDemoPanel2 = () => {
  return (
    <div>
      <h1>Flyout Panel 2</h1>
    </div>
  )
}

const FlyoutDemoContent = () => {
  const flyout = useFlyout()

  return (
    <div>
      <h1>Flyout Demo</h1>
      <p>Click on the buttons to open the flyouts.</p>
      <>
        <Button onClick={() => flyout.setFlyoutComponent(<FlyoutDemoPanel1 />)}>
          Open Flyout 1
        </Button>
        <Button onClick={() => flyout.setFlyoutComponent(<FlyoutDemoPanel2 />)}>
          Open Flyout 2
        </Button>
        <Button onClick={() => flyout.hideFlyout()}>Close Flyout</Button>
      </>
      <>...</>
    </div>
  )
}

const FlyoutDemo = () => {
  return (
    <ProvideFlyout>
      <FlyoutDemoContent />
    </ProvideFlyout>
  )
}

export default FlyoutDemo
