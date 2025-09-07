import { useEffect, useState } from "react";
import type { Meal } from "../../../../models/meal/Meal";
import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { ingredientApi } from "../../../../api_services/ingredient/IngredientAPIService";
import { mealIngredientApi } from "../../../../api_services/meal/mealIngredient/MealIngredientAPIService";
import { validateMeal } from "../../../../api_services/validators/add&editMeal/EditMealValidator";
import toast from "react-hot-toast";

interface MealRowProps {
  meal: Meal;
  editingMeal: Meal | null;
  setEditingMeal: (meal: Meal | null) => void;
  handleEditMeal: (meal: Meal) => void;
  handleDeleteMeal: (meal: Meal) => void;
  token: string;
}

export function MealRow({
  meal,
  editingMeal,
  setEditingMeal,
  handleEditMeal,
  handleDeleteMeal,
  token,
}: MealRowProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([]);
  const isEditing = editingMeal?.idMeal === meal.idMeal;

  useEffect(() => {
    const fetchData = async () => {
      const mealIngs = await mealIngredientApi.getMealIngredients(token, meal.mealName);
      const allIngs = await ingredientApi.getAllIngredients(token);
      setIngredients(mealIngs);
      setAllIngredients(allIngs);
    };
    fetchData();
  }, [meal, token]);

  const toggleIngredient = async (ingredientName: string) => {
    if (!editingMeal) return;
    const exists = ingredients.some(i => i.ingredientName === ingredientName);
    if (exists) {
      await mealIngredientApi.removeIngredientFromMeal(token, meal.mealName, ingredientName);
    } else {
      await mealIngredientApi.addIngredientToMeal(token, meal.mealName, ingredientName);
    }
    const updatedIngs = await mealIngredientApi.getMealIngredients(token, meal.mealName);
    setIngredients(updatedIngs);
  };

  const handlePriceChange = (value: string) => {
    if (!editingMeal) return;
    setEditingMeal({ ...editingMeal, price: Number(value) });
  };

  const handlePrepTimeChange = (value: string) => {
    if (!editingMeal) return;
    setEditingMeal({ ...editingMeal, prepTime: Number(value) });
  };

  const handleSave = () => {
    if (!editingMeal) return;

    const validation = validateMeal(
      editingMeal.price,
      editingMeal.prepTime,
      editingMeal.image
    );

    if (!validation.succsess) {
      toast.error(validation.message ?? "Invalid meal data");
      return;
    }

    handleEditMeal({ ...editingMeal });
    toast.success("Meal updated successfully!");
    setEditingMeal(null);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 w-32">
        {isEditing ? (
          <input
            type="text"
            value={editingMeal.image}
            onChange={e => setEditingMeal({ ...editingMeal, image: e.target.value })}
            placeholder="Image file name"
            className="border p-2 rounded w-full"
          />
        ) : (
          <img
            src={`/Images/${meal.image}`}
            alt={meal.mealName}
            className="w-25 h-25 object-contain rounded-lg"
          />
        )}
      </td>

      <td className="px-6 py-4 min-w-[120px]">{meal.mealName}</td>

      <td className="px-6 py-4 w-32">
        {isEditing ? (
          <input
            type="number"
            min={0}
            value={editingMeal.price}
            onChange={e => handlePriceChange(e.target.value)}
            className="border p-2 rounded w-full"
          />
        ) : (
          meal.price.toFixed(2)
        )}
      </td>

      <td className="px-6 py-4 w-32">
        {isEditing ? (
          <input
            type="number"
            min={0}
            value={editingMeal.prepTime}
            onChange={e => handlePrepTimeChange(e.target.value)}
            className="border p-2 rounded w-full"
          />
        ) : (
          meal.prepTime
        )}
      </td>

      <td className="px-6 py-4 min-w-[200px]">
        {isEditing ? (
          <div className="flex flex-wrap gap-2">
            {allIngredients
              .sort((a, b) => a.ingredientName.localeCompare(b.ingredientName))
              .map(ing => {
                const selected = ingredients.some(i => i.ingredientName === ing.ingredientName);
                const bg = ing.alergen ? "bg-red-200" : "bg-green-200";
                return (
                  <button
                    key={ing.idIngredient}
                    onClick={() => toggleIngredient(ing.ingredientName)}
                    className={`px-2 py-1 rounded text-sm ${selected ? bg + " border" : "bg-gray-300"} cursor-pointer`}
                  >
                    {ing.ingredientName}
                  </button>
                );
              })}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {ingredients
              .sort((a, b) => a.ingredientName.localeCompare(b.ingredientName))
              .map(i => (
                <span
                  key={i.idIngredient}
                  className={`px-2 py-1 rounded text-sm ${i.alergen ? "bg-red-200" : "bg-green-200"}`}
                >
                  {i.ingredientName}
                </span>
              ))}
          </div>
        )}
      </td>

      <td className="px-6 py-4 flex gap-3 flex-wrap">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-400 text-white rounded-lg cursor-pointer"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditingMeal({ ...meal })}
            className="px-4 py-2 bg-orange-400 text-white rounded-lg cursor-pointer"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => handleDeleteMeal(meal)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
