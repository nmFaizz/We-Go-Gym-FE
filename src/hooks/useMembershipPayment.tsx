"use client";
import api from "@/lib/api";
import { ApiError, ApiResponse } from "@/types/api";
import { 
  MembershipPayment, 
  MembershipPaymentResponse 
} from "@/types/transaction";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useMembershipPayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const { mutate } = useMutation<
    { 
      token: string, 
      membership_id: string 
    }, 
    ApiError, 
    MembershipPayment
  >({
    mutationFn: async (paymentData: MembershipPayment) => {
      const response = await api.post<ApiResponse<MembershipPaymentResponse>>(
        '/transaction/membership', 
        paymentData, 
      );
      
      const { token } = response.data.data;
      return {
        token,
        membership_id: paymentData.membership_id,
      };
    },
    onSettled: () => setIsLoading(false),
    onMutate: () => setIsLoading(true),
    onSuccess: (data) => {
      processPayment(data.token, data.membership_id);
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.error || 'Payment failed';
      toast.error(errorMessage || 'Payment failed');
    }
  });

  const createPayment = async (paymentData: MembershipPayment) => {
    mutate(paymentData);
  };

  const processPayment = (token: string, membership_id: string) => {
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
        onSuccess: async (result) => {
          const res = await api.post('/user-membership/new-membership', {
            user_id: result.order_id,
            membership_id: membership_id,
          })
          
          if (res.status !== 200) {
            toast.error('Failed to activate membership');
            throw new Error('Failed to activate membership');
          }

          toast.success('Membership activated!');
          router.push('/dashboard');
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
    } catch (e) {
      toast.error('Failed to open payment gateway');
      console.error('Payment gateway error:', e);
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