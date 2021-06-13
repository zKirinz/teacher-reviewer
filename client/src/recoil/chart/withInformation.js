import api from '../../Utils/apiCaller'
import chartAtom from './atom'

import { selector } from 'recoil'

const chartWithInformation = selector({
    key: 'chartWithInformation',
    get: async ({ get }) => {
        const chart = get(chartAtom)
        if (!chart) {
            return {}
        }

        try {
            const response = await api.get('/teachers/chart?code=' + chart)
            return response.data.data
        } catch (error) {
            throw error
        }
    },
})

export default chartWithInformation
