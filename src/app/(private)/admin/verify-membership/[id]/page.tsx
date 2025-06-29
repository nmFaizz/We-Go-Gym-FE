"use client";
import Button from "@/components/Button";
import withAuth from "@/components/hoc/withAuth";
import MainLayout from "@/layouts/MainLayout";
import api from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { Check, CircleX } from "lucide-react";
import { useParams } from "next/navigation";

function VerifyMembershipPage() {
    const params = useParams();
    const id = params?.id as string;

    const { data: verify } = useQuery<ApiResponse<User>>({
        queryKey: ["verify-membership", id],
        queryFn: async () => {
            const res = await api.get(`/user-membership/search-membership/${id}`);
            return res.data;
        },
        enabled: !!id,
        refetchOnWindowFocus: false,
    });

    return (
        <MainLayout withNavbar={false} containerSize="1200">
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center bg-primary w-full max-w-lg p-8 rounded-xl">
                    {verify?.success ? (
                        <>
                            <Check size={60} className="text-green-400" />
                            <h3>Verified!</h3>
                            <p className="text-dark">Visitor: {verify.data.username}</p>
                            <Button variant="dark" className="mt-12">
                                Return
                            </Button>
                        </>
                    ) : (
                        <>
                            <CircleX size={60} className="text-red-400" />
                            <h3 className="text-xl md:text-3xl text-dark">
                                Not Verified
                            </h3>
                            <p className="text-dark">Visitor: {verify?.data.username}</p>
                            <Button variant="dark" className="mt-12">
                                Return
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}

export default withAuth(VerifyMembershipPage)
