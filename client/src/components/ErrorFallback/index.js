import Button from '../../components/Button'
import { RepeatClockIcon } from '@chakra-ui/icons'
import { Stack, Text, Image, useMediaQuery } from '@chakra-ui/react'

import TomError from '../../assets/images/tom-error.jpg'

const ErrorFallback = ({ error, resetError }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let ErrorFallback

    if (isLargerThan768) {
        ErrorFallback = (
            <Stack w="100%" h="100%" justifyContent="center" alignItems="center">
                <Image src={TomError} borderRadius="3xl" w="100px" />
                <Text fontSize="2xl" textAlign="center">
                    Something went wrong!
                </Text>
                <Text fontSize="2xl" textAlign="center">
                    {error.message}!
                </Text>
                {resetError ? (
                    <Button h="12" onClick={() => resetError()}>
                        <RepeatClockIcon mr="2" />
                        <Text>Try again</Text>
                    </Button>
                ) : null}
            </Stack>
        )
    } else {
        ErrorFallback = (
            <Stack w="100%" h="100%" justifyContent="center" alignItems="center" p="6">
                <Image src={TomError} borderRadius="3xl" w="80px" />
                <Text fontSize="xl" textAlign="center" fontWeight="500">
                    Something went wrong!
                </Text>
                <Text fontSize="xl" textAlign="center" fontWeight="500">
                    {error.message}!
                </Text>
                {resetError ? (
                    <Button h="10" onClick={() => resetError()}>
                        <RepeatClockIcon mr="2" />
                        <Text fontSize="xl">Try again</Text>
                    </Button>
                ) : null}
            </Stack>
        )
    }

    return ErrorFallback
}

export default ErrorFallback
