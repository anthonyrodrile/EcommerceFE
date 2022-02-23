import Box from '@mui/material/Box'
import type { NextPage } from 'next'
import { AddContainer } from '../src/product/containers/AddContainer'
import { Template } from '../src/template/Template'

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <Template content={<AddContainer />} title={'Add Product'}  />
    </Box>
  )
}

export default Home
