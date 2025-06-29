export type ApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
}

export type ApiError = {
    success: boolean;
    message: string;
    error: string;
}