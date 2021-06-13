import api from '../../Utils/apiCaller'
import reviewAtom from './atom'

import { selector } from 'recoil'

const reviewWithResponse = selector({
    key: 'reviewWithResponse',
    get: async ({ get }) => {
        const review = get(reviewAtom)
        if (!review.teacher) {
            return null
        }

        try {
            const response = await api.post('/reviews/' + review.teacher, {
                rating: review.rating,
                content: review.content,
                token: review.token,
            })

            return response.data.success
        } catch (error) {
            throw error
        }
    },
})

export default reviewWithResponse
