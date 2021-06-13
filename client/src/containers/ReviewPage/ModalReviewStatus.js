import { useEffect } from 'react'

import Toast from '../../components/Toast'

import reviewAtom, { withResponse } from '../../recoil/review'

import { useRecoilValueLoadable, useResetRecoilState } from 'recoil'

const ModalReviewStatus = ({ onClose, setIsLoading }) => {
    const reviewWithResponse = useRecoilValueLoadable(withResponse)
    const resetReview = useResetRecoilState(reviewAtom)

    useEffect(() => {
        if (reviewWithResponse.contents === true) {
            resetReview()
            onClose()
        }
    }, [reviewWithResponse, resetReview, onClose])

    useEffect(() => {
        if (reviewWithResponse.state === 'hasValue' || reviewWithResponse.state === 'hasError') {
            setIsLoading(false)
        }
    }, [reviewWithResponse, setIsLoading])

    switch (reviewWithResponse.state) {
        case 'hasValue':
            if (reviewWithResponse.contents === true) {
                return <Toast isSuccess={true} />
            }
            return null
        case 'loading':
            return null
        case 'hasError':
            return <Toast isSuccess={false} />
        default:
            return <div></div>
    }
}

export default ModalReviewStatus
