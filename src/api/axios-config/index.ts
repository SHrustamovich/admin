import axios from "axios";
import { baseURL } from "../../constanta/urls";
import { responseInterceptor } from "./ResponseInteseptor";
import { errorInterceptor } from "./ErrorInteseptor";


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