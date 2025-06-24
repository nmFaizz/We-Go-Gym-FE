"use client"

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

type MembershipPlanCardProps = {
  id: string;
  type: string;
  duration: number;
  price: number;
};

function MembershipPlanCard({
  id,
  type,
  duration,
  price,
}: MembershipPlanCardProps) {
  const router = useRouter();

  function formatPrice(price: number) {
    return price >= 1000
      ? (price / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      : price?.toString();
  }

  const membershipPrice = formatPrice(price);

  function capitalizeFirst(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  const membershipType = capitalizeFirst(type)

  return (
    <div className="bg-dark/80 backdrop-blur-sm w-[400px] flex flex-col items-center gap-10 rounded-[40px] p-12 border-2 border-transparent hover:border-primary hover:border-2 hover:cursor-pointer">
      <h2 className="text-white text-4xl font-semibold text-center ">
        {membershipType} <br />
        Member
      </h2>
      <h3 className="text-primary text-5xl font-bold">Rp {membershipPrice}</h3>
      <h4 className="text-white italic text-xl font-thin border-b px-5 pb-3">
        Membership {duration} Hari{" "}
      </h4>
      <h4 className="text-white text-xl">Pilihan Tepat Untuk Pemula</h4>
      <p className="mt-6">
        Paket Silver dari We Go Gym dirancang khusus untuk Anda yang baru
        memulai perjalanan kebugaran. Dengan fasilitas dan pendampingan yang
        tepat, paket ini memberikan fondasi yang kuat untuk membangun gaya hidup
        sehat secara bertahap dan efektif.
      </p>
      {/* TODO: Process Payment Membership */}
      <Button onClick={() => router.push(`/membership/${id}`)}>
        Pilih Membership
      </Button>
    </div>
  );
}

export default MembershipPlanCard;
