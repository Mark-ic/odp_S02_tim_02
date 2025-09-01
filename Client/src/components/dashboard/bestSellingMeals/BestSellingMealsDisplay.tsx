import { useEffect, useState } from "react";
import type { Meal } from "../../../models/meal/Meal";
import { menuMealApi } from "../../../api_services/menu/menuMeal/MenuMealAPIService";

interface BestSellingMealsProps {
  menuName: string;
  token: string;
}

export function BestSellingMealsDisplay({ menuName, token }: BestSellingMealsProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const fetchMeals = async () => {
      setLoading(true);
      try {
        const data = await menuMealApi.getBestSellingMeals(menuName, token);
        console.log("data: ", data);
        setMeals(data);
      } catch (err) {
        console.error(err);
        setMeals([]);
      }
      setLoading(false);
    };

    fetchMeals();
  }, [menuName, token]);

  if (loading) return <p className="text-gray-600">Loading best selling meals...</p>;
  if (meals.length === 0) return <p className="text-gray-600">No best selling meals found for this menu.</p>;

  return (
    <div className="flex justify-center space-x-4 overflow-x-auto pb-2 scrollbar-orange">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="flex-shrink-0 w-26 text-center">
          <img
            src={`/Images/${meal.image}`}
            alt={meal.mealName}
            className="w-26 h-26 object-cover rounded-full mb-2 border-2 border-orange-300"
          />
          <p className="text-xm font-medium">{meal.mealName}</p>
        </div>
      ))}
    </div>
  );
}
