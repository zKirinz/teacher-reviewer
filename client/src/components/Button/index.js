import React from 'react'

import { Button } from '@chakra-ui/react'

const Btn = ({ children, onClick, ...style }) => {
    const Ref = React.useRef()

    const handleClick = () => {
        onClick()
        Ref.current.blur()
    }

    return (
        <Button
            ref={Ref}
            {...style}
            borderWidth="2px"
            borderRadius="3xl"
            shadow="md"
            className="bttn-unite bttn-lg bttn-success"
            onClick={handleClick}
        >
            {children}
        </Button>
    )
}

export default Btn
