import UserProfile from "@/components/UserProfile";
import MainLayout from "@/layouts/MainLayout";
import MembershipPlanCard from "./components/membership-plan-card";

const memberPlans = [
  {
    id: "1",
    type: "Classic",
    duration: 30,
    price: 250000,
  },
  {
    id: "2",
    type: "Premium",
    duration: 60,
    price: 675000,
  },
  {
    id: "3",
    type: "Platinum",
    duration: 90,
    price: 1500000,
  },
];

function MembershipPlan() {
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
          {/* TODO Integrate with API */}
          {memberPlans.map((member) => (
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
