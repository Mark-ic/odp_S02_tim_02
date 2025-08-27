import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RemoveValueByKey } from "../../../helpers/local_storage";
import { useAuth } from "../../../hooks/auth/useAuthHook";

type ProtectedRouteProps = {
  children: React.ReactNode;
  requiredRole: string;
  redirectTo?: string;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  redirectTo = "/login",
}) => {
  const { isAuthenticated, user, isLoading, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    RemoveValueByKey("authToken");
    logout();
  };

  // Prikazi loading dok se ucitava auth stanje
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Ako korisnik nije autentifikovan, preusmeri na login
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Ako je potrebna specificna uloga, proveri je
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <main className="min-h-screen bg-gradient-to-tr from-slate-600/75 to-red-800/70 flex items-center justify-center">
        <div className="bg-white/30 backdrop-blur-lg shadow-lg border border-red-300 rounded-2xl p-10 w-full max-w-lg text-center">
          <h2 className="text-3xl font-bold text-red-800/70 mb-4">
            You do not have permission
          </h2>
          <p className="text-gray-800 text-lg mb-6">
            The role{" "}
            <span className="font-semibold">"{requiredRole}"</span> 
            is required to access this page.
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-700/60 hover:bg-red-700/70 text-white px-6 py-2 rounded-xl transition"
          >
            Log out
          </button>
        </div>
      </main>
    );
  }

  return <>{children}</>;
};
