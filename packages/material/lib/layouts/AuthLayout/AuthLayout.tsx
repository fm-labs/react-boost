import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PropsWithChildren } from 'react'
import Paper from '@mui/material/Paper'

const defaultTheme = createTheme()

function AuthLayoutFooter({ children, ...props }: PropsWithChildren<any>) {
  return (
    <Box {...props}>
      {/*<Typography variant='body2' color='text.secondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='#'>
          Footer Text
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>*/}
    </Box>
  )
}

export function AuthLayout({ children }: PropsWithChildren<any>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            //height: '90vh',
          }}
        >
          {/*<Paper sx={{ p: 3, minWidth: 400, minHeight: 100 }}>{children}</Paper>*/}
          {children}
        </Box>
        {/*<AuthFooter sx={{ mt: 8, mb: 4 }} />*/}
      </Container>
    </ThemeProvider>
  )
}
