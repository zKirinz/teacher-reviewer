import StarRatings from 'react-star-ratings'

import { Box, Button, Text, Stack, useTheme, useMediaQuery } from '@chakra-ui/react'

const TeacherBtn = ({ code, rating, noReviews, onClick }) => {
    const theme = useTheme()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let TeacherBtn

    if (isLargerThan768) {
        TeacherBtn = (
            <Button
                w="100%"
                minW="xl"
                h="10vh"
                minH="50"
                borderRadius="xl"
                shadow="md"
                className="bttn-unite bttn-lg bttn-success"
                onClick={onClick}
            >
                <Stack width="100%" direction="row" justifyContent="center" alignItems="center">
                    <Text fontSize="3xl">{code}</Text>
                    <Box flex="1 1 auto">
                        <StarRatings
                            rating={rating}
                            starRatedColor={theme.colors.yellow[400]}
                            numberOfStars={5}
                            starDimension="32px"
                            name="rating"
                        />
                    </Box>
                    <Text fontSize="2xl" textAlign="center">
                        {noReviews} reviews
                    </Text>
                </Stack>
            </Button>
        )
    } else {
        TeacherBtn = (
            <Button
                w="100%"
                minW="240"
                h={16}
                minH="100"
                borderRadius="xl"
                shadow="md"
                className="bttn-unite bttn-lg bttn-success"
                onClick={onClick}
            >
                <Stack width="100%" direction="column" justifyContent="center" alignItems="center">
                    <Text fontSize="2xl">{code}</Text>
                    <Box width="100%" mt="0 !important">
                        <StarRatings
                            rating={rating}
                            starRatedColor={theme.colors.yellow[400]}
                            numberOfStars={5}
                            starDimension="24px"
                            name="rating"
                        />
                    </Box>
                    <Text fontSize="xl">{noReviews} reviews</Text>
                </Stack>
            </Button>
        )
    }

    return TeacherBtn
}

export default TeacherBtn
