import React from 'react'
import FlyoutPane, { FlyoutPaneProps } from './FlyoutPane'
import { FlyoutPaneSize, IFlyoutState } from './FlyoutPane.types'

const initialFlyoutProps: FlyoutPaneProps = {
  size: 'default',
  //variant: "default",
  visible: false,
  heading: '',
  onShow: () => console.log('FlyoutPane: SHOW'),
  onHide: () => console.log('FlyoutPane: HIDE'),
}

const initialFlyoutState: IFlyoutState = {
  flyoutComponent: null,
  flyoutProps: {},
  setFlyoutComponent: () =>
    console.log(
      'You are trying to set a Flyout component outside of the Flyout Context.' +
        ' Make sure you are inside ProvideFlyout!',
    ),
  hideFlyout: () =>
    console.log(
      'You are trying to set a Flyout pane visibility outside of the Flyout Context.' +
        ' Make sure you are inside ProvideFlyout!',
    ),
  setFlyoutSize: () =>
    console.log(
      'You are trying to set a Flyout pane size outside of the Flyout Context.' +
        ' Make sure you are inside ProvideFlyout!',
    ),
  setFlyout: () =>
    console.log(
      'You are trying to set a Flyout outside of the Flyout Context.' +
        ' Make sure you are inside ProvideFlyout!',
    ),
}

const FlyoutContext = React.createContext(initialFlyoutState)

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useFlyout().
export function ProvideFlyout({ children }: { children: any }): React.JSX.Element {
  const flyout = useProvideFlyout()
  const { flyoutProps } = flyout

  return (
    <FlyoutContext.Provider value={flyout}>
      {children}
      <FlyoutPane {...flyoutProps} />
    </FlyoutContext.Provider>
  )
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useFlyout = (): IFlyoutState => {
  return React.useContext(FlyoutContext)
}

const useProvideFlyout = (): IFlyoutState => {
  const [flyoutComponent, setFlyoutComponent] = React.useState<React.ReactElement | null>(null)
  const [flyoutProps, setFlyoutProps] = React.useState<FlyoutPaneProps>(initialFlyoutProps)

  const setVisible = React.useCallback(
    (flag: boolean) => {
      const newProps = { ...flyoutProps, visible: flag }
      setFlyoutProps(newProps)

      if (flag && flyoutProps.onShow) {
        flyoutProps.onShow()
      }
    },
    [flyoutProps],
  )

  const setSize = (size: FlyoutPaneSize) => {
    const newProps = { ...flyoutProps, size: size }
    setFlyoutProps(newProps)
  }

  const setFlyout = (component: React.ReactElement | null, props?: FlyoutPaneProps) => {
    const newProps = props ? { ...initialFlyoutProps, ...props } : initialFlyoutProps
    setFlyoutComponent(component)
    setFlyoutProps(newProps)
  }

  const hideFlyout = () => {
    if (flyoutProps.onHide) {
      flyoutProps.onHide()
    }
    setFlyout(null)
  }

  React.useEffect(() => {
    //const hasComponent = !!state.detailComponent
    const hasComponent = !!flyoutComponent
    const { visible } = flyoutProps
    // console.log("FlyoutPane: state changed", hasComponent, visible)
    if (hasComponent !== visible) {
      setVisible(hasComponent)
      console.log('FlyoutPane: change visibility to', hasComponent)
    }
  }, [flyoutProps, flyoutComponent, setVisible])

  return {
    flyoutComponent,
    flyoutProps,
    setFlyoutComponent,
    setFlyoutSize: setSize,
    setFlyout,
    hideFlyout,
  }
}

export default useFlyout
