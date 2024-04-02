interface ILoginRequest {
    username: string;
    password: string;
}

interface ILoginResponse {
    success: boolean;
    timestamp: string;
    data: {
        access_token: string;
        refresh_token: string;
    };
    error: Error | null;
}

export type { ILoginRequest, ILoginResponse };
