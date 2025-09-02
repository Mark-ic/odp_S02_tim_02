import { useEffect, useState } from "react";
import type { Meal } from "../../../models/meal/Meal";
import type { Menu } from "../../../models/menu/Menu";
import { menuApi } from "../../../api_services/menu/MenuAPIService";
import { MealsForMenuDisplay } from "./MealsForMenu";
import { BestSellingMealsDisplay } from "../bestSellingMeals/BestSellingMealsDisplay";

interface MenuDisplayProps {
  token: string;
}

export function MenuDisplay({ token }: MenuDisplayProps) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [todayMenu, setTodayMenu] = useState<Menu | null>(null);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      try {
        const menusList = await menuApi.getAllMenus(token);
        //const filteredMenus = menusList.filter(menu =>
          //dayNames.some(day => menu.menuName.toLowerCase().includes(day.toLowerCase()))
        //);
        setMenus(menusList);

        const todayIndex = new Date().getDay();
        const todayName = dayNames[todayIndex];
        const dbDailyMenu = await menuApi.getDailyMenu(token);

        let currentMenu: Menu | null = null;
        if (dbDailyMenu.idMenu !== 0 && dbDailyMenu.menuName.toLowerCase().includes(todayName.toLowerCase())) {
          currentMenu = dbDailyMenu;
        } else {
          if (dbDailyMenu.idMenu !== 0) {
            await menuApi.removeDailyMenu(token, dbDailyMenu.menuName);
          }
          const todaysMenu = menusList.find(m => m.menuName.toLowerCase().includes(todayName.toLowerCase()));
          if (todaysMenu) {
            await menuApi.setDailyMenu(token, todaysMenu.menuName);
            currentMenu = todaysMenu;
          }
        }
        setTodayMenu(currentMenu);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchMenus();
  }, [token]);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading menus...</p>;

  const handleOrderClick = (meal: Meal) => {
    console.log("Ordering meal:", meal.mealName);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Weekly Menus</h1>

      {todayMenu && (
        <div className="flex flex-col space-y-4 mb-8">
          
          <div className="p-4 rounded-2xl shadow-md border bg-yellow-100 border-yellow-300">
            <h2 className="text-xl font-semibold mb-4">{todayMenu.menuName} (Today)</h2>
            <MealsForMenuDisplay token={token} menuName={todayMenu.menuName} isToday={true} onOrderClick={handleOrderClick} />
          </div>

          <h3 className="text-lg font-semibold mb-2 text-orange-700 text-center">Top 3 meals from  today's menu</h3>
          <BestSellingMealsDisplay token={token} menuName={todayMenu.menuName} />
        </div>
      )}

      <div className="flex flex-col space-y-6">
        {menus
          .filter(m => todayMenu ? m.idMenu !== todayMenu.idMenu : true)
          .map(menu => (
            <div key={menu.idMenu} className="p-4 rounded-2xl shadow-md border bg-gray-100 border-gray-300">
              <h2 className="text-xl font-semibold mb-4">{menu.menuName}</h2>
              <MealsForMenuDisplay token={token} menuName={menu.menuName} isToday={false} />
              <p className="text-red-500 text-sm mt-2">Menu not available today</p>
            </div>
          ))}
      </div>
    </div>
  );
}
