import { useEffect, useState } from "react";
import type { Meal } from "../../../models/meal/Meal";
import { mealApi } from "../../../api_services/meal/MealAPIService";
import { menuMealApi } from "../../../api_services/menu/menuMeal/MenuMealAPIService";
import { MealCard } from "../meal/MealDisplay";

interface MealsForMenuDisplayProps {
  token: string;
  menuName?: string; 
  onMealClick?: (meal: Meal) => void; 
  locked?: boolean;
}

export function MealsForMenuDisplay({ token, menuName, onMealClick, locked = false }: MealsForMenuDisplayProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const data = menuName
          ? await menuMealApi.getAllMealsFromMenu(menuName, token)
          : await mealApi.getAllMeals(token);
        setMeals(data);
      } catch (err) {
        console.error(err);
        setMeals([]);
      }
      setLoading(false);
    };
    fetchMeals();
  }, [token, menuName]);

  if (loading) return <p className="text-gray-600">Loading meals...</p>;
  if (meals.length === 0) return <p className="text-gray-600">No meals found.</p>;

  return (
    <div
      className={
        menuName
          ? "flex space-x-4 overflow-x-auto pb-2" // horizontal scroll
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      }
    >
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className={`flex-shrink-0 w-60 ${locked ? "opacity-50 pointer-events-none" : ""}`}
          onClick={locked ? undefined : () => onMealClick?.(meal)}
        >
          <MealCard meal={meal} />
        </div>
      ))}
    </div>
  );
}
