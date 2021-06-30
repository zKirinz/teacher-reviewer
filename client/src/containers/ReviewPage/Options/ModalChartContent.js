import ErrorFallback from '../../../components/ErrorFallback'
import RatingChart from '../../../components/RartingChart'
import Spinner from '../../../components/Spinner'

import { withInformation } from '../../../recoil/chart'

import { useRecoilValueLoadable } from 'recoil'

const ModalChartContent = () => {
    const chartWithInformation = useRecoilValueLoadable(withInformation)

    switch (chartWithInformation.state) {
        case 'hasValue':
            if (chartWithInformation.contents !== {}) {
                const data = chartWithInformation.contents
                return (
                    <RatingChart
                        noReviews={data.noReviews}
                        rating={data.rating}
                        oneStarPercentage={data.oneStarPercentage}
                        twoStarPercentage={data.twoStarPercentage}
                        threeStarPercentage={data.threeStarPercentage}
                        fourStarPercentage={data.fourStarPercentage}
                        fiveStarPercentage={data.fiveStarPercentage}
                    />
                )
            }
            return null
        case 'loading':
            return <Spinner />
        case 'hasError':
            return <ErrorFallback error={chartWithInformation.contents} />
        default:
            return null
    }
}

export default ModalChartContent
