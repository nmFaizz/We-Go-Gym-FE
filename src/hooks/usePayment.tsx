import api from "@/lib/api";
import { ApiError, ApiResponse } from "@/types/api";
import { MembershipPayment, MembershipPaymentResponse } from "@/types/transaction";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export const usePayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation<string, ApiError, MembershipPayment>({
    mutationFn: async (paymentData: MembershipPayment) => {
      const response = await api.post<ApiResponse<MembershipPaymentResponse>>(
        '/transaction/', 
        paymentData, 
      );
      
      const { token } = response.data.data;
      return token;
    },
    onSettled: () => setIsLoading(false),
    onMutate: () => setIsLoading(true),
    onSuccess: (token) => {
      processPayment(token);
    },
    onError: (error) => {
      toast.error(error.message || 'Payment failed');
    }
  });

  const createPayment = async (paymentData: MembershipPayment) => {
    mutate(paymentData);
  };

  const processPayment = (token: string) => {
    if (typeof window === 'undefined') {
      console.error('Not in browser environment');
      return;
    }

    if (!window.snap) {
      console.error('Midtrans Snap not loaded');
      toast.error('Payment system not ready. Please refresh the page.');
      return;
    }

    try {
      window.snap.pay(token, {
        onSuccess: (result) => {
          console.log('Payment success:', result);
          toast.success('Payment successful!');
        },
        onPending: (result) => {
          console.log('Payment pending:', result);
          toast.loading('Payment is being processed...');
        },
        onError: (result) => {
          console.log('Payment error:', result);
          toast.error('Payment failed. Please try again.');
        },
        onClose: () => {
          console.log('Payment popup closed');
          toast.dismiss(); 
        }
      });
    } catch (error) {
      console.error('Error processing payment:', error);
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