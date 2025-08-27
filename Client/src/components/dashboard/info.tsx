import { jwtDecode } from "jwt-decode";
import { ReadValueByKey, RemoveValueByKey } from "../../helpers/local_storage";
import { useAuth } from "../../hooks/auth/useAuthHook";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";

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
    <div className="bg-white/30 backdrop-blur-lg shadow-md rounded-2xl p-10 w-full max-w-2xl border border-gray-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Info</h1>

      <div className="space-y-3 text-lg text-gray-800">
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Date and time:</strong> {new Date().toLocaleString()}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 px-4 bg-red-700/60 hover:bg-red-700/70 text-white py-2 rounded-xl  transition"
      >
        Leave
      </button>
    </div>
  );
}
