import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'

const defaultTheme = createTheme()

export function AuthLayoutSide({ children }: PropsWithChildren<any>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          {children}
      </Grid>
    </ThemeProvider>
  )
}
