import api from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { getId } from "@/lib/cookie";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export default function useUserQuery() {
    const id =
        typeof window !== "undefined" && typeof localStorage !== "undefined"
            ? getId()
            : undefined;

    const query = useQuery<ApiResponse<User>>({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await api.get(`/user/me/${id}`);
            return response.data;
        },
        enabled: !!id,
        refetchOnWindowFocus: false,
    });

    return { ...query };
}