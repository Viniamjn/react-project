import axios from 'axios';
import {BaseResponseType} from "../models/BaseResponseType";
import {IUsers} from "../models/IUsers";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});


export const getUsers = async (): Promise<IUsers[]> => {
    let {data: {users}} = await axiosInstance.get<BaseResponseType & { users: IUsers[] }>('/users');
    return users
}
export const getUser = async (id: string): Promise<IUsers> => {

    return (await axiosInstance.get<IUsers>('/users/' + id)).data;
}