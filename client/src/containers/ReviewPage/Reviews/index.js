import React from 'react'

import ErrorFallback from '../../../components/ErrorFallback'
import Spinner from '../../../components/Spinner'
import { Stack, Text } from '@chakra-ui/react'

import { withInitialReviews } from '../../../recoil/teacher'
import ReviewsList from './ReviewsList'

import { useRecoilValueLoadable } from 'recoil'

const Reviews = () => {
    const teacherWithInitialReviews = useRecoilValueLoadable(withInitialReviews)

    switch (teacherWithInitialReviews.state) {
        case 'hasValue':
            return teacherWithInitialReviews.contents.length ? (
                <ReviewsList reviewsList={teacherWithInitialReviews.contents} />
            ) : (
                <Stack w="100%" h="100%" justifyContent="center" alignItems="center">
                    <Text fontSize="2xl" textAlign="center">
                        This teacher has not been reviewed yet!
                    </Text>
                    <Text fontSize="2xl" textAlign="center">
                        Start making one!
                    </Text>
                </Stack>
            )
        case 'loading':
            return <Spinner />
        case 'hasError':
            return <ErrorFallback error={teacherWithInitialReviews.contents} />
        default:
            return null
    }
}

export default Reviews
