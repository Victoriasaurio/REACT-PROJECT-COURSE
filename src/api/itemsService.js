import { axiosService } from "./"

export const getItems = async () => {
    try {
        const res = await axiosService.get('/posts')
        return res.data
    } catch(error) {
        throw error
    }
}