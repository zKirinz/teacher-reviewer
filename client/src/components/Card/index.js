import StarRatings from 'react-star-ratings'

import { Box, Stack, Text, Badge, useTheme, useMediaQuery } from '@chakra-ui/react'

const Card = ({ code, rating, noReviews }) => {
    const theme = useTheme()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let Card

    if (isLargerThan768) {
        Card = (
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
            >
                <Text fontSize="3xl" color="white">
                    {code}
                </Text>
                <Box w="100%" flex="1 1 auto" display="flex" justifyContent="center">
                    <StarRatings
                        rating={rating}
                        starRatedColor={theme.colors.yellow[400]}
                        numberOfStars={5}
                        starDimension="32px"
                        starSpacing="6px"
                        name="rating"
                    />
                </Box>
                <Badge colorScheme="green">{noReviews} reviews</Badge>
            </Stack>
        )
    } else {
        Card = (
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
                <Text fontSize="3xl" color="white">
                    {code}
                </Text>
                <Box w="100%" display="flex" justifyContent="center" mt="0 !important">
                    <StarRatings
                        rating={rating}
                        starRatedColor={theme.colors.yellow[400]}
                        numberOfStars={5}
                        starDimension="32px"
                        starSpacing="6px"
                        name="rating"
                    />
                </Box>
                <Badge colorScheme="green">{noReviews} reviews</Badge>
            </Stack>
        )
    }

    return Card
}

export default Card
