import api from '../../Utils/apiCaller'
import searchAtom from './atom'
import updateAtom from './updateAtom'

import { DefaultValue, selector } from 'recoil'

let setTimeSearch

const setTimeOutPromise = (search) => {
    const promise = new Promise((resolve, reject) => {
        setTimeSearch = setTimeout(async () => {
            try {
                const response = await api.get('/teachers?code=' + search)
                return resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        }, 1000)
    })

    return promise
}

const searchWithResult = selector({
    key: 'searchWithResult',
    get: async ({ get }) => {
        get(updateAtom)
        const search = get(searchAtom)
        let result
        if (search) {
            await clearTimeout(setTimeSearch)
            try {
                result = await setTimeOutPromise(search)
            } catch (error) {
                throw error
            }
        } else {
            result = null
        }
        return result
    },
    set: ({ set }, newValue) => {
        if (newValue instanceof DefaultValue) {
            set(updateAtom, (value) => value + 1)
        } else {
            set(searchAtom, newValue)
        }
    },
})

export default searchWithResult
