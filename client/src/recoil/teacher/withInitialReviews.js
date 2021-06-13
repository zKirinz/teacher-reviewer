import api from '../../Utils/apiCaller'
import teacherAtom from './atom'
import updateAtom from './updateAtom'

import { DefaultValue, selector } from 'recoil'

const teacherWithInitialReviews = selector({
    key: 'teacherWithInitialReviews',
    get: async ({ get }) => {
        get(updateAtom)
        const teacher = get(teacherAtom)
        if (!teacher) {
            return []
        }

        try {
            const response = await api.get('/reviews/' + teacher)
            return response.data.data
        } catch (error) {
            throw error
        }
    },
    set: ({ set }, newValue) => {
        if (newValue instanceof DefaultValue) {
            set(updateAtom, (value) => value + 1)
        } else {
            set(teacherAtom, newValue)
        }
    },
})

export default teacherWithInitialReviews
