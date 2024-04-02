import { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { Api } from "./axios-config";

interface IEditData<T> {
    url: string;
    item: T;
}

const useGetList = <T>(key: string | [string, string], url: string) => {
    const get = async () => {
        const urlQuery = Array.isArray(key) ? url + key[1] : url;
        const data: T = await Api.get(`${urlQuery}`);
        return data;
    };
    return useQuery(key, () => get());
};

const useCreate = <T, U, V = Error>(url: string) => {
    return useMutation<U, AxiosError<V>, T>(async (body) => {
        const data: U = await Api.post(url, body);
        return data;
    });
};

const useUpdate = <T, U>() => {
    return useMutation(async ({ url, item }: IEditData<T>) => {
        const data: U = await Api.patch(`${url}`, item);
        return data;
    });
};

const useDeleteApi = <T>(url: string) => {
    return useMutation(async (id: number | string) => {
        const data: T = await Api.delete(`${url}/${id}`);
        return data;
    });
};

export { useGetList, useCreate, useUpdate, useDeleteApi };
