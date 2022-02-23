import type { NextPage } from 'next'
import * as React from 'react';
import Box from '@mui/material/Box';
import { ProductsContainer } from '../src/product/containers/ProductsContainer';
import { Template } from '../src/template/Template';

const View: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <Template content={<ProductsContainer />} title={'View and Update Products'} />
    </Box>
  )
}

export default View
