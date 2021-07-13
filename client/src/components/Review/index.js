import StarRatings from 'react-star-ratings'

import { Box, Text, useTheme, useMediaQuery } from '@chakra-ui/react'

import { formatDistanceToNow, format, compareAsc, subDays, parseISO } from 'date-fns'

const Review = ({ content, rating, time }) => {
    const theme = useTheme()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let Review

    const date = parseISO(time)
    const maxDistanceToNowDays = 30
    const displayedTime =
        compareAsc(date, subDays(new Date(), maxDistanceToNowDays)) !== -1
            ? formatDistanceToNow(date, { addSuffix: true })
            : format(date, 'dd/MM/yyyy')

    if (isLargerThan768) {
        Review = (
            <Box
                w="100%"
                pl="4"
                pr="2"
                pt="2"
                pb="3"
                borderWidth="2px"
                borderRadius="xl"
                shadow="md"
                cursor="auto"
                borderColor={theme.colors.teal[300]}
                bgColor={theme.colors.white}
            >
                <Text fontWeight="700" fontSize="md">
                    {displayedTime}
                </Text>
                <Box py="1">
                    <StarRatings
                        rating={rating}
                        starRatedColor={theme.colors.yellow[400]}
                        numberOfStars={5}
                        starDimension="24px"
                        starSpacing="2px"
                        name="rating"
                    />
                </Box>
                <Text fontWeight="500" fontSize="md" color="blackAlpha.700">
                    {content}
                </Text>
            </Box>
        )
    } else {
        Review = (
            <Box
                w="100%"
                minW="250"
                pl="3"
                pr="2"
                pt="2"
                pb="3"
                borderWidth="2px"
                borderRadius="xl"
                shadow="md"
                cursor="auto"
                borderColor={theme.colors.teal[300]}
                bgColor={theme.colors.white}
            >
                <Text fontWeight="700" fontSize="sm">
                    {displayedTime}
                </Text>
                <Box pb="1">
                    <StarRatings
                        rating={rating}
                        starRatedColor={theme.colors.yellow[400]}
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                        name="rating"
                    />
                </Box>
                <Text fontWeight="500" fontSize="md" color="blackAlpha.700">
                    {content}
                </Text>
            </Box>
        )
    }

    return Review
}

export default Review
