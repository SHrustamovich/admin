// import { message } from "antd";
import axios from "axios";
import { Api } from "./index";

import type { IRefreshPostResponse } from "./types";
import { baseURL, urls } from "../../constanta/urls";

export const errorInterceptor = async (error: any) => {
    const originalConfig = error.config;
    if (error.message === "Network Error") {
        alert("Network error");
        return Promise.reject(new Error("Network Error"));
    }

    const refreshToken = localStorage.getItem("refreshToken");

    if (
        error.response?.status === 401 &&
        refreshToken !== null &&
        !originalConfig._retry
    ) {
        try {
            Api(originalConfig);
            const getRefresh: IRefreshPostResponse = await axios.post(
                baseURL + urls.auth.refresh,
                {
                    refreshToken,
                }
            );

            if (getRefresh.success) {
                const { accesToken } = getRefresh.data;
                localStorage.setItem("accessToken", accesToken);
            }

            window.location.href = "/logout";
            return Promise.reject(error);
        } catch (error) {
            window.location.href = "/logout";
            console.log(error);

            return Promise.reject(error);
        }
    } else if (error.response?.data.message === "INVALID_JWT") {
        window.location.href = "/logout";
    }

    return Promise.reject(error);
};