import * as React from 'react'
import { PropsWithChildren } from 'react'
import { INavigationItem } from '@react-boost/common'

export interface IDashboardLayoutContext {
  state: DashboardLayoutState
  setState: (state: DashboardLayoutState) => void
}

export interface DashboardLayoutState {
  dashboardTitle?: string
  sidebarEnabled?: boolean
  sidebarOpen?: boolean
  sidebarToggle?: () => void
  navigations?: Record<string, INavigationItem[]>
}

const defaultState: DashboardLayoutState = {
  dashboardTitle: 'Dashboard',
  sidebarEnabled: false,
  sidebarOpen: false,
  navigations: {},
}

export const DashboardLayoutContext = React.createContext<IDashboardLayoutContext>({
  state: {},
  setState: () => {},
})

interface DashboardLayoutContextProviderProps extends PropsWithChildren {
  initial: DashboardLayoutState
}

export function DashboardLayoutContextProvider({
  children,
  initial,
}: DashboardLayoutContextProviderProps) {
  const _initialState: DashboardLayoutState = { ...defaultState, ...initial }
  const [state, setState] = React.useState<DashboardLayoutState>(_initialState)

  return (
    <DashboardLayoutContext.Provider value={{ state, setState }}>
      {children}
    </DashboardLayoutContext.Provider>
  )
}
