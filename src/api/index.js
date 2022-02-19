import axios from 'axios'

const axiosService = axios.create()

axiosService.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

axiosService.interceptors.request.use(
    res => res,
    error => {
        return Promise.reject(error)
    }
)

export { axiosService }