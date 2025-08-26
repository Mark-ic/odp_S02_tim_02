import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistracijaForma } from "../../components/auth/RegistracijaForma";
import type { IAuthAPIService } from "../../api_services/auth/IAuthAPIService";
import { useAuth } from "../../hooks/auth/useAuthHook";

interface RegistracijaPageProps {
  authApi: IAuthAPIService;
}

export default function RegistracijaStranica({ authApi }: RegistracijaPageProps) {
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
      <div className=" flex flex-col items-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          Dobrodošli u FoodieExpress!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Kreirajte nalog i počnite sa poručivanjem hrane sa današnjeg menija
        </p>
        <RegistracijaForma authApi={authApi} />
      </div>
    </main>
  );
}
