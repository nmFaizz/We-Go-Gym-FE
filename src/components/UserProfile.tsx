import { CircleUser } from "lucide-react";

function UserProfile() {
  return (
    <div className="flex bg-dark/50 backdrop-blur-md rounded-full px-4 py-2 text-primary items-center gap-3">
      {/* TODO: Get Username From API */}
      <h4 className="text-xl">Geraldo JMK</h4>
      <CircleUser size={40} strokeWidth={2} />
    </div>
  );
}

export default UserProfile;
