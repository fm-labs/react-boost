import * as React from 'react'
import { DashboardLayoutContext } from './DashboardLayoutContext.tsx'

export const useDashboardLayoutContext = () => {
  return React.useContext(DashboardLayoutContext)
}
