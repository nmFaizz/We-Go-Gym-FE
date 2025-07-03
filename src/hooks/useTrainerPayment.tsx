import api from "@/lib/api";
import { queryClient } from "@/providers/ReactQueryProvider";
import { ApiError, ApiResponse } from "@/types/api";
import { 
  TrainerPayment,
  TrainerPaymentResponse
} from "@/types/transaction";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export const useTrainerPayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation<
    { 
      token: string, 
      sesi: number 
    }, 
    ApiError, 
    TrainerPayment
  >({
    mutationFn: async (paymentData: TrainerPayment) => {
      const response = await api.post<ApiResponse<TrainerPaymentResponse>>(
        '/transaction/personal-trainer', 
        paymentData, 
      );
      
      const { token } = response.data.data;
      return {
        token,
        sesi: paymentData.sesi,
      };
    },
    onSettled: () => setIsLoading(false),
    onMutate: () => setIsLoading(true),
    onSuccess: (data) => {
      processPayment(data.token, data.sesi);
      queryClient.invalidateQueries({ queryKey: ['user']});
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.error || 'Payment failed';
      toast.error(errorMessage || 'Payment failed');
    }
  });

  const createPayment = async (paymentData: TrainerPayment) => {
    mutate(paymentData);
  };

  const processPayment = (token: string, sesi:  number) => {
    if (typeof window === 'undefined') {
      toast.error('Not in browser environment');
      return;
    }

    if (!window.snap) {
      console.error('Midtrans Snap not loaded');
      toast.error('Payment system not ready. Please refresh the page.');
      return;
    }

    try {
      window.snap.pay(token, {
        onSuccess: async () => {
          const res = await api.post('/user-trainer/new-trainer', {
            sesi: sesi,
          })
          
          if (res.status !== 200) {
            toast.error('Failed to activate personal trainer session');
            throw new Error('Failed to activate personal trainer session');
          }

          toast.success('Personal Trainer activated!');
        },
        onPending: () => {
          toast.loading('Payment is being processed...');
        },
        onError: () => {
          toast.error('Payment failed. Please try again.');
        },
        onClose: () => {
          toast.dismiss(); 
        }
      });
    } catch (error) {
      toast.error('Failed to open payment gateway');
    }
  }

  const isSnapReady = () => {
    return typeof window !== 'undefined' && window.snap;
  };

  return { 
    createPayment, 
    processPayment, 
    isLoading,
    isSnapReady 
  };
};