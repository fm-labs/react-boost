import React from 'react'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'

export const DashboardLayoutAppBarNotificationsButton = () => {
  return (
    <>
      <IconButton color='inherit'>
        <Badge badgeContent={1} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  )
}
