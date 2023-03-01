import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {baseURL} from "../constants/urls";
import {gitHubToken} from "../constants/tokens";

const axiosService = axios.create({baseURL});

// @ts-ignore
axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = {
        Authorization: `Bearer ${gitHubToken}`,
        "User-Agent": 'Search Repo'
    }
    return config;
})

export type Response<T> = Promise<AxiosResponse<T>>;

export {
    axiosService
};
