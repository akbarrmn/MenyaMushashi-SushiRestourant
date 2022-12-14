import { Box } from '@mui/material'
import React from 'react'

const Container = (props) => {
  return (
    <>
        <Box sx={{ maxWidth: '420px', height: '100%', mr:'auto', ml: 'auto', backgroundColor:'white', position:'relative' }}>
            {props.children}
        </Box>
    </>
  )
}

export default Container