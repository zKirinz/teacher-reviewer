import { API_URL } from '../config'

import axios from 'axios'

const api = axios.create({
    baseURL: API_URL + '/api/v1',
})

export default api
