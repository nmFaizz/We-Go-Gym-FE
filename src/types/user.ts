export type User = {
    id: string;
    email: string;
    username: string;
    role: "user" | "admin";
    user_membership: {
        id: string;
        expired: string;
    }
    sesi: number;
}