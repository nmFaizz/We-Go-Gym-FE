import { CircleUser } from "lucide-react";

function UserProfile() {
  // TODO: Get Username From LocalStorage or API
  const username = localStorage.getItem("username");

  return (
    <div className="flex bg-dark/70 backdrop-blur-md rounded-full px-4 py-2 text-primary items-center gap-3">
      <h4 className="text-xl">{username ? username : "User"}</h4>
      <CircleUser size={40} strokeWidth={2} />
    </div>
  );
}

export default UserProfile;
