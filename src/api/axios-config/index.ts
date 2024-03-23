import axios from "axios";
import { responseInterceptor } from "./ResponseInteseptor";
import { errorInterceptor } from "./ErrorInteseptor";
import { baseURL } from "~constanta/urls";


export const Api = axios.create({
    baseURL,
});

Api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);