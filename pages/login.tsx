import type { NextPage } from 'next'
import * as React from 'react';
import Box from '@mui/material/Box';
import LoginContainer from '../src/auth/containers/LoginContainer';

const Login: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <LoginContainer />
    </Box>
  )
}

export default Login
