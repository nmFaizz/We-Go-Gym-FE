"use client"
import Button from "@/components/Button"
import Input from "@/components/forms/Input"
import { useMembershipPayment } from "@/hooks/useMembershipPayment"
import MainLayout from "@/layouts/MainLayout"
import api from "@/lib/api"
import { formatRupiah } from "@/lib/format"
import { ApiResponse } from "@/types/api"
import { Membership } from "@/types/membership"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"

type PaymentFormValues = {
    coupon_code: string
}

export default function MembershipPaymentPage() {
    const params = useParams()
    const membership_id = params.id as string

    const { createPayment } = useMembershipPayment()

    const methods = useForm<PaymentFormValues>({
        mode: "onBlur",
        defaultValues: {
            coupon_code: "",
        }
    })
    const { handleSubmit } = methods

    const { data, isLoading } = useQuery<ApiResponse<Membership>>({
        queryKey: ["single-membership", membership_id],
        queryFn: async () => {
            const res = await api.get(`/membership/${membership_id}`)
            return res.data
        },
        enabled: !!membership_id,
        refetchOnWindowFocus: false,
    })  

    const onSubmit: SubmitHandler<{
        coupon_code: string
    }> = (data) => {
        createPayment({
            membership_id: membership_id,
            kode: data.coupon_code,
        })
    }

    return (
        <MainLayout 
            withNavbar={false} 
            containerSize="1200"
        >
            <div className="flex flex-col h-screen items-center justify-center">
                <Image 
                    src={"/logo.png"}
                    alt="logo"
                    width={117.32}
                    height={37}
                    className="invert"
                />
                <FormProvider {...methods}>
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-5 w-full max-w-[540px] rounded-xl"
                    >
                        <div className="border border-primary p-5 rounded-lg mb-5">
                            <h1 className="text-2xl font-semibold text-primary">
                                {data?.data.type.toUpperCase()} MEMBER
                            </h1>
                            <p className="text-xl text-primary mt-2">
                                Rp {formatRupiah(data?.data.price || 0)} 
                            </p>
                        </div>
                        
                        <Input 
                            id="coupon_code"
                            placeholder="Enter Coupon Code Ex: RPL2025"
                            label="Coupon Code (Optional)"
                        />

                        <p className="text-gray-500 mt-1">Enter coupon code to get discount!</p>

                        <Button 
                            type="submit" 
                            className="mt-8"
                        >
                            Continue Payment
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </MainLayout>
    )
}