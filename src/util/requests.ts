import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8000';

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {
    return axios({
        method: 'POST',
        baseURL: BASE_URL,
        url: 'oauth/token',
        data: loginData,
    });
}