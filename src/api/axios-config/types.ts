export interface IError {
    message: "jwt expired" | "invalid signature";
    // jwt expited jwtni vahti tugasa
    // invalid signature token yaroqsiz bo'lsa
    path: string;
    statusCode: number;
    timestamp: string;
}

export interface IPostREsponse {
    refreshToken: string;
}

export interface IRefreshPostResponse {
    success: boolean;
    timestamp: string;
    data: {
        refreshToken: "$2a$10$o1ikI3JKpEgajvDmG6px1OzTwtlGa37ocBl4b6MG8LIyz3Sz9ZDcG";

        accesToken: string;
    };
    error: Error | null;
}