import { ReactNode } from "react";

interface IUser {
    id: number;
    status: string;
    username: string;
    fullname: string;
    phone: string;
}

interface IAuthContextData {
    isAuthenticated: boolean;
    logout: () => void;
    setUserData: (accessToken: string, refreshToken: string) => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export type { IAuthContextData, IAuthProviderProps, IUser };