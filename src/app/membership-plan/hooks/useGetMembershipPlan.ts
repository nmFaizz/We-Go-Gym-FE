import api from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

type GetMembership = {
    id: string;
    type: string;
    duration: number;
    price: number;
};

export const useGetMembershipPlan = () => {
  const { data, isLoading } = useQuery<ApiResponse<GetMembership[]>>({
    queryKey: ["membershipPlan"],
    queryFn: async () => {
      const response = await api.get("/membership/", {
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        withCredentials: false,
      });

      return response.data
    },
    refetchOnWindowFocus: false,
  });

  return {data, isLoading}
};
