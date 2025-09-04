import { useEffect, useState } from "react";
import { menuApi } from "../../../../api_services/menu/MenuAPIService";
import { mealApi } from "../../../../api_services/meal/MealAPIService";
import { menuMealApi } from "../../../../api_services/menu/menuMeal/MenuMealAPIService";
import type { Menu } from "../../../../models/menu/Menu";
import type { Meal } from "../../../../models/meal/Meal";
import { MealsInMenu } from "./MealsInMenu";
import { AddMealsToMenu } from "./AddMealsToMenu";

interface MenuMealsTabProps {
  token: string;
}

export function MenuMealsTab({ token }: MenuMealsTabProps) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [menuMeals, setMenuMeals] = useState<Meal[]>([]);
  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      const data = await menuApi.getAllMenus(token);
      setMenus(data);
      if (data.length > 0) {
        setSelectedMenu(data[0].menuName);
      }
    };
    fetchMenus();
  }, [token]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await mealApi.getAllMeals(token);
      setAllMeals(data);
    };
    fetchMeals();
  }, [token]);

  useEffect(() => {
    if (!selectedMenu) return;
    const fetchMenuMeals = async () => {
      setLoading(true);
      const data = await menuMealApi.getAllMealsFromMenu(selectedMenu, token);
      setMenuMeals(data);
      setLoading(false);
    };
    fetchMenuMeals();
  }, [selectedMenu, token]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleAddMeal = async (mealName: string) => {
    await menuMealApi.addMealToMenu(mealName, selectedMenu, token);
    const updated = await menuMealApi.getAllMealsFromMenu(selectedMenu, token);
    setMessage({ text: "Meal is added to menu!", type: "success" });
    setMenuMeals(updated);
  };

  const handleRemoveMeal = async (mealName: string) => {
    await menuMealApi.removeMealFromMenu(mealName, selectedMenu, token);
    const updated = await menuMealApi.getAllMealsFromMenu(selectedMenu, token);
    setMessage({ text: "Meal is removed from menu!", type: "success" });
    setMenuMeals(updated);
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-6xl w-full mx-auto mt-10">
      {message && (
        <div
          className={`px-4 py-2 rounded-lg text-white font-semibold mb-4 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Menu Meals</h2>

      <div className="mb-6 flex gap-2 items-center">
        <label className="font-semibold">Select Menu:</label>
        <select
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
          className="border p-2 rounded cursor-pointer"
        >
          {menus.map((menu) => (
            <option key={menu.idMenu} value={menu.menuName} >
              {menu.menuName}
            </option>
          ))}
        </select>
      </div>

      <h3 className="text-xl font-semibold mb-2">Meals in this menu</h3>
      <MealsInMenu meals={menuMeals} loading={loading} onRemove={handleRemoveMeal} />

      <h3 className="text-xl font-semibold mb-2">Add meals to menu</h3>
      <AddMealsToMenu allMeals={allMeals} menuMeals={menuMeals} onAdd={handleAddMeal} />
    </div>
  );
}
