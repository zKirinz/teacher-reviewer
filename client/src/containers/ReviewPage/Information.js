import Card from '../../components/Card'
import ErrorCard from '../../components/Card/ErrorCard'
import LoadingCard from '../../components/Card/LoadingCard'

import { withInformation } from '../../recoil/teacher'

import { useRecoilValueLoadable } from 'recoil'

const Information = () => {
    const teacherWithInformation = useRecoilValueLoadable(withInformation)

    switch (teacherWithInformation.state) {
        case 'hasValue':
            return (
                <Card
                    code={teacherWithInformation.contents.code}
                    rating={teacherWithInformation.contents.rating}
                    noReviews={teacherWithInformation.contents.noReviews}
                />
            )
        case 'loading':
            return <LoadingCard />
        case 'hasError':
            return <ErrorCard error={teacherWithInformation.contents} />
        default:
            return null
    }
}

export default Information
