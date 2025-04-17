import React, { PropsWithChildren } from 'react'
import {
  DashboardLayout,
  DashboardLayoutAppBar,
  DashboardLayoutAppBarAccountButton,
  DashboardLayoutAppBarMenu,
  DashboardLayoutDrawer,
  DashboardLayoutMain, DashboardLayoutState,
} from '../../lib'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import Avatar from '@mui/material/Avatar'

const DemoDashboardLayout = (props: PropsWithChildren<any>) => {
  const dashboardProps: DashboardLayoutState = {
    dashboardTitle: 'Demo Dashboard',
    sidebarOpen: true,
    sidebarEnabled: true,
    navigations: {
      //sidebar: demoNavItems,
    },
  }

  const demoAccountMenuItems = [
    {
      key: 'profile',
      label: 'Profile',
      labelElement: <>
        <Avatar /> My Profile
      </>,
      onClick: () => {
        console.log('Profile')
      },
    },
  ]

  const demoSecondaryAccountMenuItems = [
    {
      key: 'settings',
      label: 'Settings',
      icon: <Settings fontSize='small' />,
      onClick: () => {
        console.log('Settings')
      },
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <Logout fontSize='small' />,
      onClick: () => {
        console.log('Logout')
      },
    },
  ]

  return (
    <>
      <DashboardLayout {...dashboardProps}>
        <DashboardLayoutAppBar>
          <DashboardLayoutAppBarMenu>
            {/* Notifications */}
            {/*<DashboardLayoutAppBarNotificationsButton />*/}

            {/* Messages */}
            {/*<DashboardLayoutAppBarMessagesButton />*/}

            {/* Account Menu */}
            <DashboardLayoutAppBarAccountButton
              menuItems={demoAccountMenuItems}
              secondaryMenuItems={demoSecondaryAccountMenuItems} />
          </DashboardLayoutAppBarMenu>
        </DashboardLayoutAppBar>
        <DashboardLayoutDrawer />
        <DashboardLayoutMain>{props.children}</DashboardLayoutMain>
      </DashboardLayout>
    </>
  )
}

export default DemoDashboardLayout
