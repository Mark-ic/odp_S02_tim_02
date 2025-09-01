import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReadValueByKey } from "../../helpers/local_storage";
import { useAuth } from "../../hooks/auth/useAuthHook";
import { MenuDisplay } from "../../components/dashboard/menu/MenuDisplay";
{/* import { MealDisplay } from "../../components/dashboard/meal/MealDisplay";*/}
import { InfoAboutPage } from "../../components/dashboard/userInfo/info";

export default function AdminDashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const token = ReadValueByKey("authToken") || "";

  useEffect(() => {
    if (!isAuthenticated || !token) {
      logout();
      navigate("/login");
    }
  }, [isAuthenticated, logout, navigate, token]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url(/Images/background2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <header className="sticky top-0 z-50">
        <InfoAboutPage />
      </header>

      <main id="dashboard-main" className="flex-1 p-6 flex flex-col items-center justify-start">
        <MenuDisplay token={token} />
        {/* <MealDisplay token={token} /> */}
      </main>
    </div>
  );
}
