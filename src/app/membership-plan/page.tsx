"use client";

import UserProfile from "@/components/UserProfile";
import MainLayout from "@/layouts/MainLayout";
import MembershipPlanCard from "./components/membership-plan-card";
import { useGetMembershipPlan } from "./hooks/useGetMembershipPlan";

function MembershipPlan() {
  const { data: memberPlans } = useGetMembershipPlan();

  return (
    <MainLayout withNavbar={false} containerSize="full" withMarginY={false}>
      <div className='bg-[url("/assets/bg-membership-plan.png")] min-h-screen bg-cover bg-center px-10 font-poppins'>
        <div className="flex justify-end">
          <UserProfile />
        </div>
        <h1 className="text-5xl text-primary text-center font-bold uppercase">
          Choose Your Membership
        </h1>
        <div className="flex flex-wrap mt-10 px-10 gap-10 justify-center">
          {memberPlans?.map((member) => (
            <MembershipPlanCard
              key={member.id}
              id={member.id}
              type={member.type}
              duration={member.duration}
              price={member.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default MembershipPlan;
