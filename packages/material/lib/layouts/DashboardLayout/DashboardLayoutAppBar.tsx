import React, { PropsWithChildren } from 'react'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MuiAppBar from '@mui/material/AppBar'
import { DashboardLayoutContext } from './DashboardLayoutContext.tsx'

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}))

interface DashboardLayoutAppBarProps {
  //open?: boolean
}

export const DashboardLayoutAppBar = ({
  children,
  ...other
}: PropsWithChildren<DashboardLayoutAppBarProps>) => {
  const { state, setState } = React.useContext(DashboardLayoutContext)

  const toggleDrawer = () => {
    const newState = { ...state, sidebarOpen: !state.sidebarOpen }
    setState(newState)
  }

  return (
    <AppBar position='absolute' open={state?.sidebarOpen}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        {state.sidebarEnabled && (
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              //...(state?.sidebarOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {children}
      </Toolbar>
    </AppBar>
  )
}
