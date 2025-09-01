import { jwtDecode } from "jwt-decode";
import { ReadValueByKey } from "../../helpers/local_storage";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";
import { useNavigate } from "react-router-dom";

export function UserProfileCard() {
  const token = ReadValueByKey("authToken");
  const navigate = useNavigate();

  if (!token) return <p className="text-center mt-10 text-red-600">User not logged in.</p>;

  const { id, username, role } = jwtDecode<JwtTokenClaims>(token);
  const displayRole = role === "admin" ? "manager" : role;

  const handleBack = () => {
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-2xl border border-orange-300 rounded-2xl p-8 max-w-md w-full mx-auto mt-10">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/Images/profile_logo.png"
          alt="Profile"
          className="w-24 h-24 object-cover rounded-full border-2 border-orange-500 mb-4"
        />
      </div>

      <div className="space-y-3 text-gray-700 w-full">
        <div className="flex justify-between">
          <span className="font-semibold">User ID:</span>
          <span>{id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Username:</span>
          <span>{username}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Role:</span>
          <span>{displayRole}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition cursor-pointer"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
