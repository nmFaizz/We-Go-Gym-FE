"use client";
import Button from "@/components/Button";
import MainLayout from "@/layouts/MainLayout";
import { History, HomeIcon } from "lucide-react";
import Image from "next/image";
import TrainerList from "@/app/(private)/dashboard/components/TrainerList";
import UserProfile from "@/components/UserProfile";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import useUserQuery from "@/hooks/useUserQuery";

export default function DashboardPage() {
    const { data: qrImg } = useQuery<string>({
        queryKey: ["qr-code"],
        queryFn: async () => {
            const res = await api.get("/user/generate-qr", {
            responseType: "blob",
            });

            return URL.createObjectURL(res.data); // ← Convert blob ke URL untuk <img>
        },
        refetchOnWindowFocus: false,
    });

    const { data: user } = useUserQuery();

    return (
        <MainLayout 
            withNavbar={false} 
            containerSize="1200" 
            withMarginY
            className="relative"
        >
            <div className="w-full flex justify-between items-center mb-12">
                <Link href="/">
                    <HomeIcon size={40} className="text-primary" />
                </Link>

                <UserProfile username={user?.data.username} />
            </div>
            <div>
                <Link href="/history">
                    <Button 
                        leftIcon={History}
                        variant="outline"
                    >
                        View History
                    </Button>
                </Link>

                <div className="bg-primary rounded-xl mt-8 p-8 md:p-12 text-dark">
                    <div className="flex justify-center md:justify-start md:items-center gap-5 md:flex-row flex-col">
                        <Image 
                            src="/logo.png"
                            alt="logo"
                            width={117.32}
                            height={37}
                        />

                        <h2 className="text-3xl md:text-5xl font-semibold text-dark">
                            Membership Card
                        </h2>
                    </div>

                    <figure className="relative w-[200px] h-[200px] md:w-[296px] md:h-[296px] bg-dark my-12">
                        {qrImg && (
                            <Image 
                            src={qrImg}
                            alt="Membership QR Code"
                            fill
                            unoptimized
                            />
                        )}
                    </figure>

                    <div className="w-full border border-dark my-5"></div>

                    <div className="w-full flex justify-end">

                        {user?.data.user_membership.id ? (
                            <div>
                                <p className="text-2xl text-end">Available Until:</p>
                                <h1 className="text-4xl text-end font-bold">11-11-2025 [23:59]</h1>
                            </div>
                        ) : (
                            <div className="bg-dark text-primary rounded-lg p-5 text-center">
                                <p className="text-lg md:text-2xl font-semibold">
                                    BELUM MEMBERSHIP
                                </p>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
            
            {!user?.data.user_membership.id && (
                <section className="flex flex-col items-center mt-24 md:mt-32">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">
                        Become a member today!
                    </h1>
                    
                    <Link href="/membership-plan">
                        <Button variant="primary" className="flex items-center justify-center">
                            View Plans
                        </Button>
                    </Link>
                </section>
            )}
            
            <section className="mt-24 md:mt-32">
                <h1 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">
                    Need Personal Trainer?
                </h1>

                <TrainerList />
            </section>

            <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-primary blur-[150px] opacity-70 rounded-full z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-[-120px] w-[300px] h-[300px] bg-primary blur-[150px] opacity-70 rounded-full z-20 pointer-events-none" />
        </MainLayout>
    );
}