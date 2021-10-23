import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/Activity";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseData = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseData),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseData),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseData),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseData),
}

const Activities = {
    list: () => request.get<Activity[]>('activities'),
    details: (id: string) => request.get<Activity>(`activities/${id}`),
    create: (activity: Activity) => request.post<void>(`activities`, activity),
    update: (activity: Activity) => request.put<void>(`activities/${activity.id}`, activity),
    delete: (id: string) => request.delete<void>(`activities/${id}`)
}

const agent = {
    Activities
}
export default agent;