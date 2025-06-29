export type UserLoginResponse = {
    id: string;
    email: string;
    role: "admin" | "member";
}