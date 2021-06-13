import { Stack, useMediaQuery } from '@chakra-ui/react'

import Spinner from '../Spinner'

const LoadingCard = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let LoadingCard

    if (isLargerThan768) {
        LoadingCard = (
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                w="100%"
                minW="520"
                h="100%"
                minH="60px"
                pl="5"
                pr="5"
                py="2"
                borderWidth="2px"
                borderRadius="xl"
                shadow="md"
                cursor="auto"
                borderColor="whiteAlpha.400"
                bgColor="teal"
            >
                <Spinner color="yellow" />
            </Stack>
        )
    } else {
        LoadingCard = (
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                w="100%"
                minW="260"
                minH="120px"
                pl="5"
                pr="5"
                pb="3"
                borderWidth="2px"
                borderRadius="xl"
                shadow="md"
                cursor="auto"
                borderColor="whiteAlpha.400"
                bgColor="teal"
            >
                <Spinner color="yellow" />
            </Stack>
        )
    }

    return LoadingCard
}

export default LoadingCard
