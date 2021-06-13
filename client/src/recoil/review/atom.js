import { atom } from 'recoil'

const reviewAtom = atom({
    key: 'reviewAtom',
    default: { teacher: '', rating: 0, content: '', token: '' },
})

export default reviewAtom
