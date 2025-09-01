import { InfoAboutPage } from "../../components/dashboard/headerOfPage/HeaderOfPage";
import { UserProfileCard } from "../../components/profile/UserProfileCard";

export default function ProfilePage() {
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
      </main>
    </div>
  );
}
