import type { NextPage } from 'next'
import * as React from 'react';
import Box from '@mui/material/Box';
import RegisterContainer from '../src/auth/containers/RegisterContainer';

const Login: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <RegisterContainer />
    </Box>
  )
}

export default Login
