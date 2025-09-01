import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { authApi } from "./api_services/auth/AuthAPIService";
import { ProtectedRoute } from "./components/auth/protected_route/ProtectedRoute";
import LoginPage from "./pages/auth/LoginPage";
import UserDashboardPage from "./pages/dashboards/UserDashboardPage";
import AdminDashboardPage from "./pages/dashboards/AdminDashboardPage";
import RegistrationPage from "./pages/auth/RegistrationPage";
import NotFoundStranica from "./pages/not_found/NotFoundPage";
import OrderPage from "./pages/ordering/OrderPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage authApi={authApi} />} />
      <Route path="/register" element={<RegistrationPage authApi={authApi} />} />
      <Route path="/404" element={<NotFoundStranica />} />
        {/* User Dashboard */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboardPage />
            </ProtectedRoute>
        }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboardPage />
            </ProtectedRoute>
        }
        />
        
        {/*Ordering Page*/}
        <Route
        path="/order/:mealId"
        element={
          <ProtectedRoute requiredRole={["user", "admin"]}>
            <OrderPage />
          </ProtectedRoute>
        }
        />
        {/* Profile Page */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute requiredRole={["user", "admin"]}> 
              <ProfilePage />
            </ProtectedRoute>
          }
        />


        {/* Preusmerava na dashboard kao default rutu */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Catch-all ruta za nepostojeće stranice */}
        <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
