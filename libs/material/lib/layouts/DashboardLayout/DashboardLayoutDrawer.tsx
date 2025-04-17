import React, { PropsWithChildren } from 'react'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import { MUI_DRAWER_WIDTH } from './layout.constants.ts'
import { DashboardLayoutContext } from './DashboardLayoutContext.tsx'

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: MUI_DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

interface DashboardLayoutDrawerProps extends PropsWithChildren<DrawerProps> {
  //open?: boolean
  // toggleDrawer?: () => void
}

export const DashboardLayoutDrawer = ({ children, ...props }: DashboardLayoutDrawerProps) => {
  const { state, setState } = React.useContext(DashboardLayoutContext)

  // const navigation = React.useMemo(() => {
  //   console.log('navigations', state?.navigations)
  //   return state?.navigations?.sidebar || []
  // }, [state?.navigations])

  const toggleDrawer = () => {
    const newState = { ...state, sidebarOpen: !state.sidebarOpen }
    setState(newState)
  }

  if (state.sidebarEnabled === false) {
    return null
  }

  const drawerProps: DrawerProps = {
    variant: 'temporary',
    ...props
  }

  return (
    <Drawer {...drawerProps} open={state?.sidebarOpen}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {/*<List component='nav'><NavListItems items={navigation} /></List>*/}
      {children}
    </Drawer>
  )
}

//export default DashboardLayoutDrawer
