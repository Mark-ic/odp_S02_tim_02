import { InfoAboutPage } from "../../components/dashboard/headerOfPage/HeaderOfPage";
import { UserOrdersList } from "../../components/profile/UserOrdersDisplay";
import { UserProfileCard } from "../../components/profile/UserProfileCard";
import { ReadValueByKey } from "../../helpers/local_storage";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";

export default function ProfilePage() {
  
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = ReadValueByKey("authToken");
    if (token) {
      try {
        const decoded = jwtDecode<JwtTokenClaims>(token);
        setIsAdmin(decoded.role === "admin");
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

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
    
      <main className="flex-1 p-6 flex flex-col items-center justify-start">
        <UserProfileCard/>
        {!isAdmin && <UserOrdersList />}
      </main>
    </div>
  );
}
