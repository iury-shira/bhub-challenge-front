import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { getAuthData } from './storage';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8000';

type LoginData = {
    username: string;
    password: string;
}

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token
    } : config.headers;
    return axios({...config, baseURL: BASE_URL, headers});
}

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    const data = qs.stringify({
        ...loginData,
        grant_type : 'password'
    });

    return axios({
        method: 'POST',
        baseURL: BASE_URL,
        url: '/login',
        data,
        headers
    });
}