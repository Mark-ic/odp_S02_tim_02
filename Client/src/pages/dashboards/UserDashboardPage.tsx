import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReadValueByKey } from "../../helpers/local_storage";
import { useAuth } from "../../hooks/auth/useAuthHook";
import { MenuDisplay } from "../../components/dashboard/MenuDisplay";
import type { Menu } from "../../models/menu/Menu";
import { InfoAboutPage } from "../../components/dashboard/info";

export default function UserDashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = ReadValueByKey("authToken");
    if (!isAuthenticated || !token) {
      logout();
      navigate("/login");
    }
  }, [isAuthenticated, logout, navigate]);

  const dummyMenus: Menu[] = [
    { idMenu: 1, dailyMenu: true, menuName: "Monday" },
    { idMenu: 2, dailyMenu: false, menuName: "Tuesday" },
    { idMenu: 3, dailyMenu: false, menuName: "Wednesday" },
    { idMenu: 4, dailyMenu: false, menuName: "Thursday" },
    { idMenu: 5, dailyMenu: false, menuName: "Friday" },
    { idMenu: 6, dailyMenu: false, menuName: "Saturday" },
    { idMenu: 7, dailyMenu: false, menuName: "Sunday" },
  ];

  return (
    <div
          className="min-h-screen flex flex-col"
          style={{
            backgroundImage: "url(/Images/background2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <header className="sticky top-0 z-50">
            <InfoAboutPage />
          </header>
    
          <main className="flex-1 p-6 flex items-center justify-center">
            <MenuDisplay menus={dummyMenus} />
          </main>
        </div>
  );
}
