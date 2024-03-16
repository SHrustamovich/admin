import {
    FC,
    useState,
    useMemo,
    useContext,
    useCallback,
    createContext,
} from "react";
// import {
//     clearLocalStorage,
//     getLocalstorage,
//     setLocalstorage,
// } from "~utils/helpers";

import type { IAuthContextData, IAuthProviderProps } from "./types";

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    const [accessToken, setAccessToken] = useState<string | null>(token);

    const logout = useCallback(() => {
        localStorage.clear();
        setAccessToken(null);
    }, []);

    const isAuthenticated = useMemo(() => {
        const correct =
            !!accessToken?.trim() &&
            accessToken !== "undefined" &&
            accessToken !== null;

        if (!correct) {
            logout();
        }

        return correct;
    }, [accessToken]);

    const setUserData = (access_token: string, refresh_token: string) => {
        setAccessToken(accessToken);
        console.log(accessToken,refresh_token)
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
        console.log("salom")
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                logout,
                setUserData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);