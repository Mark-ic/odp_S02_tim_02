import type { Meal } from "../../../models/meal/Meal";

interface MealCardProps {
  meal: Meal;
  onClick?: (meal: Meal) => void;
}

export function MealCard({ meal, onClick }: MealCardProps) {
  return (
    <div
      onClick={() => onClick?.(meal)}
      className="cursor-pointer p-4 rounded-2xl shadow-md border bg-gray-50 border-gray-300 hover:shadow-lg transition-shadow"
    >
      <img
        src={`/Images/${meal.image}`}
        alt={meal.mealName}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <h2 className="text-xl font-semibold mb-1">{meal.mealName}</h2>
      <p className="text-sm text-gray-500">Price: ${meal.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">Prep Time: {meal.prepTime} min</p>
      <p className="text-sm text-gray-500">Orders: {meal.numberOfOrders}</p>
    </div>
  );
}
