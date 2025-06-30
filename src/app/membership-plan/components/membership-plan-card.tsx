"use client"

import Button from "@/components/Button";
import { usePayment } from "@/hooks/usePayment";

type MembershipPlanCardProps = {
  id: string;
  type: string;
  duration: number;
  price: number;
  user_id?: string;
};

function MembershipPlanCard({
  id,
  type,
  duration,
  price,
  user_id
}: MembershipPlanCardProps) {
  const { createPayment } = usePayment();

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
    <div className="bg-dark/80 backdrop-blur-sm flex flex-col items-center gap-10 rounded-[40px] p-5 md:p-12 border-2 border-transparent hover:border-primary hover:border-2 hover:cursor-pointer">
      <h2 className="text-white text-2xl md:text-4xl font-semibold text-center">
        {membershipType} <br />
        Member
      </h2>
      <h3 className="text-primary text-5xl font-bold">Rp {membershipPrice}</h3>
      <h4 className="text-white italic text-xl font-thin border-b px-5 pb-3">
        Membership {duration} Hari{" "}
      </h4>
      <p className="mt-6">
        Paket Silver dari We Go Gym dirancang khusus untuk Anda yang baru
        memulai perjalanan kebugaran. Dengan fasilitas dan pendampingan yang
        tepat, paket ini memberikan fondasi yang kuat untuk membangun gaya hidup
        sehat secara bertahap dan efektif.
      </p>

      <Button onClick={() => {
        createPayment({
          membership_id: id,
          user_id: user_id,
        })
      }}>
        Pilih Membership
      </Button>
    </div>
  );
}

export default MembershipPlanCard;
