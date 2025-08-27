import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReadValueByKey } from "../../helpers/local_storage";
import { useAuth } from "../../hooks/auth/useAuthHook";
import { InfoAboutPage } from "../../components/dashboard/info";


export default function AdminDashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = ReadValueByKey("authToken");

    if (!isAuthenticated || !token) {
      logout();
      navigate("/login");
    }
  }, [isAuthenticated, logout, navigate]);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-600/75 to-orange-800/70 flex items-center justify-center">
      <InfoAboutPage />
    </main>
  );
}
