import ReactApexChart from 'react-apexcharts'
import { MdPerson } from 'react-icons/md'
import StarRatings from 'react-star-ratings'

import { Stack, Box, Text, Icon, useTheme, useMediaQuery } from '@chakra-ui/react'

const RatingChart = ({
    noReviews,
    rating,
    oneStarPercentage,
    twoStarPercentage,
    threeStarPercentage,
    fourStarPercentage,
    fiveStarPercentage,
}) => {
    const theme = useTheme()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const chartConfig = {
        series: [
            {
                data: [
                    fiveStarPercentage,
                    fourStarPercentage,
                    threeStarPercentage,
                    twoStarPercentage,
                    oneStarPercentage,
                ],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 240,
            },
            plotOptions: {
                bar: {
                    barHeight: '70%',
                    borderRadius: 4,
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom',
                    },
                },
            },
            colors: [
                theme.colors.teal[400],
                theme.colors.green[400],
                theme.colors.yellow[400],
                theme.colors.orange[400],
                theme.colors.red[400],
            ],
            dataLabels: { enabled: false },
            xaxis: {
                categories: ['5', '4', '3', '2', '1'],
                labels: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: theme.fontSizes['xl'],
                    },
                },
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function () {
                            return ''
                        },
                    },
                    formatter: function (value) {
                        return value + '%'
                    },
                },
            },
            legend: {
                show: false,
            },
        },
    }

    return (
        <Stack
            direction={isLargerThan768 ? 'row' : 'column'}
            w="100%"
            h={260}
            justifyContent="space-around"
            alignItems="center"
            fontSize="xl"
        >
            <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
                <Text fontSize={isLargerThan768 ? '6xl' : '7xl'}>{rating}</Text>
                <Box mt="0 !important">
                    <StarRatings
                        rating={rating}
                        starRatedColor={theme.colors.yellow[400]}
                        numberOfStars={5}
                        starDimension={isLargerThan768 ? '24px' : '30px'}
                        starSpacing={isLargerThan768 ? '4px' : '8px'}
                        name="rating"
                    />
                </Box>
                <Text fontSize={isLargerThan768 ? 'lg' : 'xl'} mt="0 !important">
                    {noReviews} <Icon as={MdPerson} />
                </Text>
            </Stack>
            <Box flex="1 1 auto" w={isLargerThan768 ? null : '100%'} h="100%">
                <ReactApexChart
                    options={chartConfig.options}
                    series={chartConfig.series}
                    type="bar"
                    width="100%"
                    height="100%"
                />
            </Box>
        </Stack>
    )
}

export default RatingChart
