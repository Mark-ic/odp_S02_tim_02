import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { mealIngredientApi } from "../../../../api_services/meal/mealIngredient/MealIngredientAPIService";

interface IngredientListProps {
  token: string;
  ingredients: Ingredient[];
  onDeleted: () => void;
}

export function IngredientList({ token, ingredients, onDeleted }: IngredientListProps) {
  const handleDeleteIngredient = async (name: string) => {
    if (!window.confirm(`Delete ingredient "${name}"?`)) 
        return;
    await mealIngredientApi.removeIngredient(token, name);
    onDeleted();
  };

  const sortedIngredients = [...ingredients].sort((a, b) =>
    a.ingredientName.localeCompare(b.ingredientName)
  );

  return (
    <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-3">Ingredients List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Group</th>
            <th className="p-2 border">Allergen</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedIngredients.map(ing => (
            <tr key={ing.idIngredient} className="hover:bg-gray-50">
              <td className="p-2 border">{ing.ingredientName}</td>
              <td className="p-2 border">{ing.category}</td>
              <td className="p-2 border">{ing.alergen ? "Yes" : "No"}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDeleteIngredient(ing.ingredientName)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                > Delete </button>
              </td>
            </tr>
          ))}
          {sortedIngredients.length === 0 && (
            <tr>
              <td colSpan={4} className="p-2 text-center text-gray-500">
                No ingredients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
