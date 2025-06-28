import DashboardLayout from "@/app/(private)/layouts/DashboardLayout";

export default function HistoryPage() {
    return (
        <DashboardLayout>
            <h1 className="text-primary text-3xl md:text-4xl font-bold">History</h1>
            
            <div className="bg-primary w-full rounded-lg text-dark p-6 md:p-8 space-y-5 mt-8">
                <h4 className="text-2xl font-semibold">Entry</h4>

                <div className="border w-full"></div>

                <p className="text-2xl font-semibold">11-11-2024 [18.30]</p>
            </div>

            <div className="bg-primary w-full rounded-lg text-dark p-6 md:p-8 space-y-5 mt-8">
                <h4 className="text-2xl font-semibold">Entry</h4>

                <div className="border w-full"></div>

                <p className="text-2xl font-semibold">11-11-2024 [18.30]</p>
            </div>

                
            <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-primary blur-[150px] opacity-70 rounded-full z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-[-120px] w-[300px] h-[300px] bg-primary blur-[150px] opacity-70 rounded-full z-20 pointer-events-none" />
        </DashboardLayout>
    );
}