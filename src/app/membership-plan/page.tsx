"use client";
import MembershipPlanCard from "@/app/membership-plan/components/membership-plan-card";
import { useGetMembershipPlan } from "@/app/membership-plan/hooks/useGetMembershipPlan";
import useUserQuery from "@/hooks/useUserQuery";
import DashboardLayout from "@/app/(private)/layouts/DashboardLayout";
import Image from "next/image";

function MembershipPlan() {
  const { data: memberPlans } = useGetMembershipPlan();
  const { data: user } = useUserQuery();

  return (
    <DashboardLayout widthSize="full">
      <Image 
        src="/assets/bg-membership-plan.png"
        alt="Membership Plan Background"
        fill
        className="absolute z-[-1] top-0 lef-0 object-cover opacity-50"
      />
      <div className='min-h-screen bg-cover bg-center px-10 font-poppins'>
        <h1 className="text-3xl md:text-5xl text-primary text-center font-bold uppercase">
          Choose Your Membership
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10 justify-center">
          {memberPlans?.data?.map((member) => (
            <MembershipPlanCard
              key={member.id}
              id={member.id}
              type={member.type}
              duration={member.duration}
              price={member.price}
              user_id={user?.data.id}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MembershipPlan;
