import React, { useRef } from 'react'
import { MdInsertChart, MdHome, MdRateReview } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import Btn from '../../../components/Button'
import { RepeatIcon } from '@chakra-ui/icons'
import { Text, useMediaQuery, useDisclosure, Icon } from '@chakra-ui/react'

import chartAtom from '../../../recoil/chart'
import teacherAtom, { withInitialReviews } from '../../../recoil/teacher'
import ModalChart from './ModalChart'
import ModalReview from './ModalReview'

import { useResetRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

const Options = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const modalReviewRef = useRef()
    const modalChartRef = useRef()

    const history = useHistory()
    const handleGoBackToHomeClick = () => {
        history.push('/')
    }

    const {
        isOpen: isModalReviewOpen,
        onOpen: onModalReviewOpen,
        onClose: onModalReviewClose,
    } = useDisclosure()
    const {
        isOpen: isModalChartOpen,
        onOpen: onModalChartOpen,
        onClose: onModalChartClose,
    } = useDisclosure()
    const resetTeacherWithInitialReviews = useResetRecoilState(withInitialReviews)

    const teacher = useRecoilValue(teacherAtom)
    const setChart = useSetRecoilState(chartAtom)
    const handleModalChartOpen = () => {
        onModalChartOpen()
        setChart(teacher)
    }

    return (
        <React.Fragment>
            <Btn h="10" onClick={handleGoBackToHomeClick}>
                <Icon as={MdHome} mr={isLargerThan768 ? 1 : 0} />
                {isLargerThan768 ? <Text fontSize="xl">Home</Text> : null}
            </Btn>
            <Btn h="10" onClick={resetTeacherWithInitialReviews}>
                <RepeatIcon mr={isLargerThan768 ? 1 : 0} />
                {isLargerThan768 ? <Text fontSize="xl">Reload</Text> : null}
            </Btn>
            <Btn h="10" onClick={handleModalChartOpen}>
                <Icon as={MdInsertChart} mr={isLargerThan768 ? 1 : 0} />
                {isLargerThan768 ? <Text fontSize="xl">Chart</Text> : null}
            </Btn>
            <Btn h="10" onClick={onModalReviewOpen}>
                <Icon as={MdRateReview} mr={isLargerThan768 ? 1 : 0} />
                {isLargerThan768 ? (
                    <Text fontSize="xl" ref={modalReviewRef}>
                        Want to review?
                    </Text>
                ) : null}
            </Btn>

            <ModalChart
                isOpen={isModalChartOpen}
                onClose={onModalChartClose}
                finalRef={modalChartRef}
            />
            <ModalReview
                isOpen={isModalReviewOpen}
                onClose={onModalReviewClose}
                finalRef={modalReviewRef}
            />
        </React.Fragment>
    )
}

export default Options
