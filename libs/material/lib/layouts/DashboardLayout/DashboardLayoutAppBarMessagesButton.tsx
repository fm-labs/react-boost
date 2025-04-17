import React from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import { Message as MessageIcon } from '@mui/icons-material'

export const DashboardLayoutAppBarMessagesButton = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Messages'>
          <IconButton color='inherit'>
            <Badge badgeContent={1} color='secondary'>
              <MessageIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
    </>
  )
}
