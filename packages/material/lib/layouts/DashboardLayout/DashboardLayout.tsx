import * as React from 'react'
import { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DashboardLayoutContextProvider, DashboardLayoutState } from './DashboardLayoutContext.tsx'


interface DashboardLayoutProps extends PropsWithChildren<DashboardLayoutState> {
  // components?: {
  //   AppBar?: React.ReactNode
  //   Drawer?: React.ReactNode
  //   Main?: React.ReactNode
  // }
}

export function DashboardLayout({ children, ...initialState }: DashboardLayoutProps) {
  const defaultTheme = createTheme()
  return (
    <>
      <DashboardLayoutContextProvider initial={initialState}>
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CssBaseline />
          <Box sx={{ display: 'flex' }}>
            {/*components?.AppBar || <DashboardLayoutAppBar />*/}
            {/*components?.Drawer || <DashboardLayoutDrawer />*/}
            {/*components?.Main || <DashboardLayoutMain>{children}</DashboardLayoutMain>*/}
            {children}
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
      </DashboardLayoutContextProvider>
    </>
  )
}
