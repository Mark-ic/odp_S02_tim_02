import { jwtDecode } from "jwt-decode";
import { ReadValueByKey, RemoveValueByKey } from "../../../helpers/local_storage";
import { useAuth } from "../../../hooks/auth/useAuthHook";
import type { JwtTokenClaims } from "../../../types/auth/JwtTokenClaims";
import { useNavigate } from "react-router-dom";

export function InfoAboutPage() {
  const token = ReadValueByKey("authToken");
  const { logout } = useAuth();
  const navigate = useNavigate();

  if (!token) return null;

  const { username } = jwtDecode<JwtTokenClaims>(token);


  const handleLogout = () => {
    RemoveValueByKey("authToken");
    logout();
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md shadow-md border-b border-orange-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-gray-800 font-medium">
          <button 
            onClick={goToProfile} 
            className="w-10 h-10 rounded-full overflow-hidden hover:bg-gray-200 flex items-center justify-center cursor-pointer border-2 border-orange-600"
          >
            <img 
              src="/Images/profile_logo.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </button>
          <span>{username}</span>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition cursor-pointer"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
