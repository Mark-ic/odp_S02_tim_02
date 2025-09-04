import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { mealIngredientApi } from "../../../../api_services/meal/mealIngredient/MealIngredientAPIService";

interface IngredientListProps {
  token: string;
  ingredients: Ingredient[];
  onDeleted: () => void;
}

export function IngredientList({ token, ingredients, onDeleted }: IngredientListProps) {
  const handleDeleteIngredient = async (name: string) => {
    if (!window.confirm(`Delete ingredient "${name}"?`)) return;
    await mealIngredientApi.removeIngredient(token, name);
    onDeleted();
  };

  const sortedIngredients = [...ingredients].sort((a, b) =>
    a.ingredientName.localeCompare(b.ingredientName)
  );

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-7xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Ingredients</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Group</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Allergen</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedIngredients.map(ing => (
              <tr key={ing.idIngredient} className="hover:bg-gray-50">
                <td className="px-4 py-2">{ing.ingredientName}</td>
                <td className="px-4 py-2">{ing.category}</td>
                <td className={`px-4 py-2 font-semibold ${ing.alergen ? "text-red-500" : "text-green-500"}`}>
                  {ing.alergen ? "Yes" : "No"}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteIngredient(ing.ingredientName)}
                    className="bg-red-500 text-white px-3 py-1.5 rounded-xl hover:bg-red-600 font-semibold transition cursor-pointer"
                  > Delete </button>
                </td>
              </tr>
            ))}
            {sortedIngredients.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No ingredients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
