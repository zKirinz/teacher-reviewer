import Sp from 'react-spinkit'

import { Stack, useTheme } from '@chakra-ui/react'

const Spinner = ({ color }) => {
    const theme = useTheme()

    return (
        <Stack w="100%" h="100%" justifyContent="center" alignItems="center">
            <Sp
                name="pacman"
                fadeIn="quarter"
                style={{
                    color: color === 'yellow' ? theme.colors.yellow[400] : theme.colors.teal[400],
                }}
            />
        </Stack>
    )
}

export default Spinner
