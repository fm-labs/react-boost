import * as React from 'react'
import { DashboardLayoutContext } from './DashboardLayoutContext.tsx'

/**
 * Hook for Dashboard Layout
 */
export const useDashboard = () => {
  const { state, setState } = React.useContext(DashboardLayoutContext)

  const setAppBarTitle = (value: string) => {
    const newState = { ...state, appbarTitle: value }
  }
}
