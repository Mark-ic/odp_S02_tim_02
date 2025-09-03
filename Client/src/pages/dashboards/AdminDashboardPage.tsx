import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReadValueByKey } from "../../helpers/local_storage";
import { useAuth } from "../../hooks/auth/useAuthHook";
import { InfoAboutPage } from "../../components/dashboard/headerOfPage/HeaderOfPage";
import { MenuTab } from "../../components/dashboard/adminTabs/menuTab/MenuTab";

export default function AdminDashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const token = ReadValueByKey("authToken") || "";

  const [activeTab, setActiveTab] = useState<"menus" | "orders">("menus");

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

      <main className="flex-1 p-6 flex flex-col items-center justify-start gap-6 w-full max-w-7xl mx-auto">
       
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("menus")}
            className={`px-4 py-2 rounded-xl font-semibold transition cursor-pointer ${
              activeTab === "menus"
                ? "bg-white shadow text-gray-800"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          > Menus
          </button>
          

        </div>

        <div className="w-full">
          {activeTab === "menus" && <MenuTab token={token} />}
          
        </div>
      </main>
    </div>
  );
}
