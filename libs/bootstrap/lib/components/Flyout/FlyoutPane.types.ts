import { FlyoutPaneProps } from './FlyoutPane.tsx'
import React from 'react'

export type FlyoutPaneSize = 'default' | 'sm' | 'md' | 'lg' | 'full'
export type FlyoutPaneVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'

export interface IFlyoutState {
  flyoutProps: FlyoutPaneProps
  flyoutComponent: React.ReactElement | null
  setFlyoutComponent: (component: React.ReactElement | null) => void
  setFlyoutSize: (val: FlyoutPaneSize) => void
  setFlyout: (component: React.ReactElement | null, props?: FlyoutPaneProps) => void
  hideFlyout: () => void
}
