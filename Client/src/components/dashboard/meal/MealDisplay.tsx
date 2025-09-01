import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Meal } from "../../../models/meal/Meal";
import { useRole } from "../../../hooks/other/UseRole";
import { MealIngredients } from "../../ingredients/IngredientsDisplay";

interface MealCardProps {
  meal: Meal;
  token: string;
  onOrderClick?: (meal: Meal) => void;
  isOrderEnabled?: boolean;
}

export function MealCard({ meal, token, onOrderClick, isOrderEnabled = true }: MealCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const role = useRole();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="cursor-pointer p-4 rounded-2xl shadow-md border bg-gray-50 border-gray-300 hover:shadow-lg transition-shadow"
        onClick={() => setIsModalOpen(true)} >
        <img
          src={`/Images/${meal.image}`}
          alt={meal.mealName}
          className="w-full h-40 object-cover rounded-lg mb-2"
        />
        <h2 className="text-xl font-semibold mb-1">{meal.mealName}</h2>
        <p className="text-sm text-gray-800">Price: ${meal.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Prep Time: {meal.prepTime} min</p>

        {role === "user" && (
          <div className="flex justify-center">
            <button
              className={`mt-2 px-4 py-2 rounded-lg text-white ${
                isOrderEnabled
                  ? "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                  : "bg-gray-400 cursor-default"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (isOrderEnabled) {
                  onOrderClick?.(meal);
                  navigate(`/order/${meal.idMeal}`);
                }
              }}
            >
              Order
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 bg-black/50 overflow-auto">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full relative border-2 border-orange-500">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700 font-bold cursor-pointer"
            >
              X
            </button>

            <img
              src={`/Images/${meal.image}`}
              alt={meal.mealName}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{meal.mealName}</h2>
            <p className="text-gray-700 mb-1">Price: ${meal.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-1">Prep Time: {meal.prepTime} min</p>
            <p className="text-gray-700 mb-4">Orders: {meal.numberOfOrders}</p>
            <MealIngredients token={token} mealName={meal.mealName} />
          </div>
        </div>
      )}
    </div>
  );
}
