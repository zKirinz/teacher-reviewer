import { useEffect } from 'react'

import { useToast, useMediaQuery } from '@chakra-ui/react'

const Toast = ({ isSuccess }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const toast = useToast()

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: 'You have reviewed successfully.',
                description: `This message will disappear after ${
                    isLargerThan768 ? 5 : 3
                } seconds.`,
                status: 'success',
                position: isLargerThan768 ? 'bottom-right' : 'top',
                variant: 'left-accent',
                duration: isLargerThan768 ? 5000 : 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Review Failed!',
                description: `This message will disappear after ${
                    isLargerThan768 ? 5 : 3
                } seconds.`,
                status: 'error',
                position: isLargerThan768 ? 'bottom-right' : 'top',
                variant: 'left-accent',
                duration: isLargerThan768 ? 5000 : 3000,
                isClosable: true,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null
}

export default Toast
