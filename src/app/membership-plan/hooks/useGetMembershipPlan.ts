import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

type GetMembershipResponse = {
  success: boolean;
  message: string;
  data: {
    id: string;
    type: string;
    duration: number;
    price: number;
  }[];
};

export const useGetMembershipPlan = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["membershipPlan"],
    queryFn: async () => {
      const response = await api.get<GetMembershipResponse>("/membership");

      return response.data.data
    },
    refetchOnWindowFocus: false,
  });

  return {data, isLoading}
};
