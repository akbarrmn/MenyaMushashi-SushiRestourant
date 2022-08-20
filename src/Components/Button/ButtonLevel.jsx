import { Button, Typography } from '@mui/material'
import React from 'react'

const ButtonLevel = () => {
    const levels = [1, 2, 3, 4, 5, 6, 7, 8]
    const [level, setLevel] = React.useState(1);
    const items = []
    const spiceLevel = (item) => {
        setLevel(item)
    }
    levels.map((item)=>{
        items.push(
            <Button sx={{
                display: 'flex',
                justifyContent: 'center',
                p: '11px',
                alignItems: 'center',
                backgroundColor: level === item ? '#E8EAF0' : '#F7F7F7',
                borderRadius: '6px',
                width: '39px',
                height: '39px',
                minWidth: 'unset'
            }}
            key={item}
            onClick={(e) => spiceLevel(item)}
            >
                <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '14px', lineHeight: '17px' }}>
                    {item}
                </Typography>
            </Button>
        )
    })
    return (
        <>
            {items}
        </>
    )
}

export default ButtonLevel