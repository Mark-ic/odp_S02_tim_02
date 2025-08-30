import { jwtDecode } from "jwt-decode";
import { ReadValueByKey, RemoveValueByKey } from "../../../helpers/local_storage";
import { useAuth } from "../../../hooks/auth/useAuthHook";
import type { JwtTokenClaims } from "../../../types/auth/JwtTokenClaims";

export function InfoAboutPage() {
  const token = ReadValueByKey("authToken");
  const { logout } = useAuth();

  if (!token) return null;

  const { id, username, role } = jwtDecode<JwtTokenClaims>(token);

  const handleLogout = () => {
    RemoveValueByKey("authToken");
    logout();
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md shadow-md border-b border-orange-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex space-x-6 text-gray-800 font-medium">
          <span><strong>ID:</strong> {id}</span>
          <span><strong>Username:</strong> {username}</span>
          <span><strong>Role:</strong> {role}</span>
          <span><strong>Date:</strong> {new Date().toLocaleDateString()}</span>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
