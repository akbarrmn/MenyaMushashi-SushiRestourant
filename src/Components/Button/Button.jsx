import React from 'react'

const Button = (props) => {
    return (
        <>
            <Button sx={{ width:'79px', heigth:'33px' }}>
                {props.children}
            </Button>
        </>
    )
}

export default Button