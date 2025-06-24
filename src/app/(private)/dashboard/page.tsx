import Button from "@/components/Button";
import MainLayout from "@/layouts/MainLayout";
import { History, HomeIcon } from "lucide-react";
import Image from "next/image";
import TrainerList from "@/app/(private)/dashboard/components/TrainerList";
import UserProfile from "@/components/UserProfile";
import Link from "next/link";

export default function DashboardPage() {
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

                <UserProfile />
            </div>
            <div>
                <Button 
                    leftIcon={History}
                    variant="outline"
                >
                    View History
                </Button>

                <div className="bg-primary rounded-xl mt-8 p-8 md:p-12 text-dark">
                    <div className="flex items-center gap-5">
                        <Image 
                            src="/logo.png"
                            alt="logo"
                            width={117.32}
                            height={37}
                        />

                        <h2 className="text-5xl font-semibold text-dark">
                            Membership Card
                        </h2>
                    </div>

                    <figure className="w-[296px] h-[296px] bg-dark my-12">
                        {/* <Image 
                            src="/assets/membership-card.png"
                            alt="Membership Card"
                            width={296}
                            height={296}
                            className="w-full h-full object-cover"
                        /> */}
                    </figure>

                    <div className="w-full border border-dark my-5"></div>

                    <div className="w-full flex justify-end">
                        <div>
                            <p className="text-2xl text-end">Available Until:</p>
                            <h1 className="text-4xl text-end font-bold">11-11-2025 [23:59]</h1>
                        </div>
                    </div>
                </div>
            </div>
            
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