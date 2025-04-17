import * as React from 'react'
import Typography from '@mui/material/Typography'
import { DashboardLayoutContext } from './DashboardLayoutContext.tsx'
import { PropsWithChildren } from 'react'

interface AccountMenuProps {
  //open?: boolean
  //toggleDrawer?: () => void
}

export function DashboardLayoutAppBarMenu({
  children,
  ...other
}: PropsWithChildren<AccountMenuProps>) {
  const { state, setState } = React.useContext(DashboardLayoutContext)

  return (
    <React.Fragment>
      <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
        {state?.dashboardTitle || 'Dashboard'}
      </Typography>

      {/* Notifications */}
      {/*<DashboardLayoutAppBarNotificationsButton />*/}

      {/* Messages */}
      {/*<DashboardLayoutAppBarMessagesButton />*/}

      {/* Account Menu */}
      {/*<DashboardLayoutAppBarAccountButton />*/}

      {children}
    </React.Fragment>
  )
}
