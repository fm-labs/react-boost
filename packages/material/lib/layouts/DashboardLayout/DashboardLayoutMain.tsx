import React, { PropsWithChildren } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

export const DashboardLayoutMain = (props: PropsWithChildren<any>) => {
  return (
    <>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Box sx={{ my: 1 }}>{props.children}</Box>
      </Box>
    </>
  )
}
