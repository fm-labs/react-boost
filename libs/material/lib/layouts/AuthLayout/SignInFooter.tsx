import React from 'react'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

const SignInFooter = () => {
  return (
    <>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default SignInFooter
