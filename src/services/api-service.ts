import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}

});
const getAll = async <T, >(endpoint: string, callbackFn?: () => void): Promise<T> => {
    const {data} = await axiosInstance.get<T>(endpoint);
    return data;
}


export const apiService = {
    productService: {
        getAll
    },
    recipesService: {
        getAll
    },
    usersService: {
        getAll
    },

}