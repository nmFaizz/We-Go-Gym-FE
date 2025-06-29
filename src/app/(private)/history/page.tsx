"use client";
import DashboardLayout from "@/app/(private)/layouts/DashboardLayout";
import api from "@/lib/api";
import { getId } from "@/lib/cookie";
import { ApiResponse } from "@/types/api";
import { HistoryEntry } from "@/types/history";
import { useQuery } from "@tanstack/react-query";

export default function HistoryPage() {
    const id =
        typeof window !== "undefined" && typeof localStorage !== "undefined"
            ? getId()
            : undefined;

    const { data: history } = useQuery<ApiResponse<HistoryEntry[]>>({
        queryKey: ["history"],
        queryFn: async () => {
            const res = await api.get(`/history/user/${id}`);
            return res.data;
        },
        refetchOnWindowFocus: false,
    });

    return (
        <DashboardLayout>
            <h1 className="text-primary text-3xl md:text-4xl font-bold">History</h1>
            
            {history?.data?.map((entry, i) => (
                <div key={i} className="bg-primary w-full rounded-lg text-dark p-6 md:p-8 space-y-5 mt-8">
                    <h4 className="text-2xl font-semibold">
                        {entry.username}
                    </h4>

                    <div className="border w-full"></div>

                    <p className="text-2xl font-semibold">
                        {new Date(entry.entry_time).toLocaleString()}
                    </p>
                </div>
            ))}

            {!history?.data && (
                <div className="bg-primary w-full rounded-lg text-dark p-6 md:p-8 space-y-5 mt-8">
                    <h4 className="text-2xl font-semibold">No history found</h4>
                    <p className="text-dark">You have not made any entries yet.</p>
                </div>
            )}
                
            <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-primary blur-[150px] opacity-70 rounded-full z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-[-120px] w-[300px] h-[300px] bg-primary blur-[150px] opacity-70 rounded-full z-20 pointer-events-none" />
        </DashboardLayout>
    );
}