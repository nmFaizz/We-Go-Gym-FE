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
      const response = await api.get("/membership/");

      return response.data
    },
    refetchOnWindowFocus: false,
  });

  return {data, isLoading}
};
