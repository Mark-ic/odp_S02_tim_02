import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "../../components/auth/RegistrationForm";
import type { IAuthAPIService } from "../../api_services/auth/IAuthAPIService";
import { useAuth } from "../../hooks/auth/useAuthHook";

interface RegistrationPageProps {
  authApi: IAuthAPIService;
}

export default function RegistrationPage({ authApi }: RegistrationPageProps) {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) 
      navigate(`/${user.role}-dashboard`);
  }, [isAuthenticated, navigate, user]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-200 flex items-center justify-center p-6"
    style={{
        backgroundImage: "url(/Images/background2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} 
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          Welcome to FoodieExpress!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Create an account and start ordering food from today's menu
        </p>
        <RegistrationForm authApi={authApi} />
      </div>
    </main>
  );
}
