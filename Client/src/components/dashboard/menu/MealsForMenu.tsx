import { useEffect, useState } from "react";
import type { Meal } from "../../../models/meal/Meal";
import { mealApi } from "../../../api_services/meal/MealAPIService";
import { menuMealApi } from "../../../api_services/menu/menuMeal/MenuMealAPIService";
import { MealCard } from "../meal/MealDisplay";

interface MealsForMenuDisplayProps {
  token: string;
  menuName?: string; 
  onMealClick?: (meal: Meal) => void; 
  onOrderClick?: (meal: Meal) => void;
  isToday?: boolean;
}

export function MealsForMenuDisplay({ token, menuName, onMealClick, onOrderClick, isToday }: MealsForMenuDisplayProps) {
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
    <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-orange">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="flex-shrink-0 w-60 cursor-pointer"
          onClick={() => onMealClick?.(meal)}
        >
          <MealCard 
            meal={meal} 
            token={token}
            onOrderClick={onOrderClick} 
            isOrderEnabled={!!isToday}
          />
        </div>
      ))}
    </div>
  );
}
