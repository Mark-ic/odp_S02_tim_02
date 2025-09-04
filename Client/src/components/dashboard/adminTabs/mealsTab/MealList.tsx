import type { Meal } from "../../../../models/meal/Meal";
import { MealRow } from "./MealRow";

interface MealListProps {
  meals: Meal[];
  editingMeal: Meal | null;
  setEditingMeal: (meal: Meal | null) => void;
  handleEditMeal: (meal: Meal) => void;
  handleDeleteMeal: (meal: Meal) => void;
  token: string;
}

export function MealList({ meals, editingMeal, setEditingMeal, handleEditMeal, handleDeleteMeal, token }: MealListProps) {
  return (
    <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-6 max-w-7xl w-full mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-orange-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Meal Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Prep Time</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ingredients</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {meals.map(meal => (
            <MealRow
              key={meal.idMeal}
              meal={meal}
              editingMeal={editingMeal}
              setEditingMeal={setEditingMeal}
              handleEditMeal={handleEditMeal}
              handleDeleteMeal={handleDeleteMeal}
              token={token}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
