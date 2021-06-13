import { Stack, Text, useMediaQuery } from '@chakra-ui/react'

const ErrorCard = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let ErrorCard

    if (isLargerThan768) {
        ErrorCard = (
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
                py="2.5"
                borderWidth="2px"
                borderRadius="xl"
                shadow="md"
                cursor="auto"
                borderColor="whiteAlpha.400"
                bgColor="teal"
                color="white"
            >
                <Text fontSize="lg" fontWeight="500" textAlign="center">
                    Something went wrong!
                </Text>
                <Text fontSize="lg" fontWeight="500" textAlign="center">
                    Reload to try again!
                </Text>
            </Stack>
        )
    } else {
        ErrorCard = (
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
                color="white"
            >
                <Text fontSize="lg" fontWeight="500" textAlign="center">
                    Something went wrong!
                </Text>
                <Text fontSize="lg" fontWeight="500" textAlign="center">
                    Reload to try again!
                </Text>
            </Stack>
        )
    }

    return ErrorCard
}

export default ErrorCard
