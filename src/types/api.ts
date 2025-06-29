export type ApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
}

export type ApiError = {
    status: number;
    message: string;
    response?: {
        data: {
            error: string;
            message: string;
            succes: boolean;
        }
    };
}