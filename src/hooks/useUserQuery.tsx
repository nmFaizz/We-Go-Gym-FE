import api from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export default function useUserQuery() {
    const query = useQuery<ApiResponse<User>>({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await api.get(`/user/me`);
            return response.data;
        },
        refetchOnWindowFocus: false,
    });

    return { ...query };
}