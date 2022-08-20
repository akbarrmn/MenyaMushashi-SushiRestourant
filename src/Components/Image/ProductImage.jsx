import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Content1 from '../../Assets/Contents/content1.png'

const ProductImage = () => {
    return (
        <>
            <Box component={'img'} src={Content1} sx={{ width: '100%', maxHeight: '350px', backgroundSize: 'cover', objectFit: 'cover' }} />
            <Link to={'/'}>
                <Box sx={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '6px',
                    p: '9px',
                    top: '20px',
                    left: '20px',
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <KeyboardBackspaceIcon sx={{ color: 'black', fontSize: '22px' }} />
                </Box>
            </Link>
        </>
    )
}

export default ProductImage