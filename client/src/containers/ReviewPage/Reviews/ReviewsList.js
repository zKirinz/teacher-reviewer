import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from 'react-spinkit'

import ErrorFallback from '../../../components/ErrorFallback'
import Review from '../../../components/Review'
import { Stack, Text, Image, useTheme } from '@chakra-ui/react'

import api from '../../../Utils/apiCaller'
import TomScrollAllReviews from '../../../assets/images/tom-scroll-all-reviews.jpg'
import teacherAtom from '../../../recoil/teacher'

import { useRecoilValue } from 'recoil'

const ReviewsList = ({ reviewsList }) => {
    const theme = useTheme()
    const [list, setList] = useState(reviewsList)
    const [hasMore, setHasMore] = useState(reviewsList.length === 6)
    const [error, setError] = useState(null)
    const [lastReviewId, setLastReviewId] = useState(reviewsList[reviewsList.length - 1].id)
    const teacher = useRecoilValue(teacherAtom)

    const moreReviewsFetching = async () => {
        try {
            const response = await api.get('/reviews/' + teacher + '?reviewId=' + lastReviewId)
            const additionalList = response.data.data
            if (additionalList.length < 6) {
                setHasMore(false)
            } else {
                setLastReviewId(additionalList[5].id)
            }
            setList(list.concat(response.data.data))
        } catch (error) {
            setError(error)
        }
    }
    return error ? (
        <ErrorFallback error={error} />
    ) : (
        <InfiniteScroll
            dataLength={list.length}
            next={moreReviewsFetching}
            hasMore={hasMore}
            loader={
                <Stack w="100%" justifyContent="center" alignItems="center" py={3}>
                    <Spinner
                        name="pacman"
                        fadeIn="quarter"
                        style={{
                            color: theme.colors.yellow[400],
                        }}
                    />
                </Stack>
            }
            scrollThreshold={0.9}
            scrollableTarget="infinite-scroll"
            style={{ padding: '6px' }}
            endMessage={
                <Text fontSize="2xl" fontWeight="600" textAlign="center" color="yellow.500" py={4}>
                    That is all reviews
                    <Image
                        src={TomScrollAllReviews}
                        borderRadius="full"
                        w="60px"
                        display="inline-block"
                        mx={3}
                    />
                </Text>
            }
        >
            <Stack spacing={2.5}>
                {list.map((review) => (
                    <Review
                        key={review.id}
                        content={review.content}
                        rating={review.rating}
                        time={review.createdDate}
                    />
                ))}
            </Stack>
        </InfiniteScroll>
    )
}

export default ReviewsList
