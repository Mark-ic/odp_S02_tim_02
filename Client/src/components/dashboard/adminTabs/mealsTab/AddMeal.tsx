import { useState, useEffect } from "react";
import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { mealIngredientApi } from "../../../../api_services/meal/mealIngredient/MealIngredientAPIService";
import { validateMeal } from "../../../../api_services/validators/add&editMeal/AddMealValidator";

interface MealAddProps {
  token: string;
  ingredients: Ingredient[];
  onAdded: () => void;
}

export function MealAdd({ token, ingredients, onAdded }: MealAddProps) {
  const [newMealName, setNewMealName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newPrepTime, setNewPrepTime] = useState(0);
  const [newImage, setNewImage] = useState("");
  const [newMealIngredients, setNewMealIngredients] = useState<string[]>([]);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleAddMeal = async () => {
    const validation = validateMeal(newMealName, newPrice, newPrepTime, newImage, newMealIngredients);
    if (!validation.succsess) {
      alert(validation.message);
      return;
    }

    await mealIngredientApi.addMeal(token, newMealName, newPrice, newImage, newPrepTime, newMealIngredients);
    setMessage({ text: "New meal is added!", type: "success" });
    setNewMealName("");
    setNewPrice(0);
    setNewPrepTime(0);
    setNewImage("");
    setNewMealIngredients([]);
    onAdded();
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-7xl w-full mx-auto mt-10">
      {message && (
        <div className={`px-4 py-2 rounded-lg text-white font-semibold mb-4 text-center ${
          message.type === "success" ? "bg-green-500" : "bg-red-500"
        }`}>
          {message.text}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Meal</h2>
      <div className="flex flex-wrap gap-2 items-center">
        <input type="text" placeholder="Meal name" value={newMealName} 
          onChange={e => setNewMealName(e.target.value)} className="flex-1 p-2 border rounded" />
        <input type="number" min={0} placeholder="Price" value={newPrice} 
          onChange={e => setNewPrice(Math.max(0, Number(e.target.value)))} className="w-24 p-2 border rounded" />
        <input type="number" min={0} placeholder="Prep Time" value={newPrepTime} 
          onChange={e => setNewPrepTime(Math.max(0, Number(e.target.value)))} className="w-24 p-2 border rounded" />
        <input type="text" placeholder="Image name" value={newImage} 
          onChange={e => setNewImage(e.target.value)} className="flex-1 p-2 border rounded" />

        <select multiple value={newMealIngredients} 
          onChange={e => setNewMealIngredients(Array.from(e.target.selectedOptions, option => option.value))} 
          className="flex-1 p-2 border rounded">
          {ingredients.sort((a,b) => a.ingredientName.localeCompare(b.ingredientName)).map(ing => (
            <option key={ing.idIngredient} value={ing.ingredientName}>
              {ing.ingredientName} {ing.alergen ? "(Allergen)" : ""}
            </option>
          ))}
        </select>

        <button onClick={handleAddMeal} 
          className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition cursor-pointer">
          Add Meal
        </button>
      </div>
    </div>
  );
}
