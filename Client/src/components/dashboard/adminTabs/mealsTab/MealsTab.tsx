import { useEffect, useState } from "react";
import type { Meal } from "../../../../models/meal/Meal";
import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { mealApi } from "../../../../api_services/meal/MealAPIService";
import { mealIngredientApi } from "../../../../api_services/meal/mealIngredient/MealIngredientAPIService";
import { ingredientApi } from "../../../../api_services/ingredient/IngredientAPIService";
import { MealRow } from "./MealRow";

interface MealTabProps {
  token: string;
}

export function MealTab({ token }: MealTabProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMeal, setEditingMeal] = useState<Meal | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const [newMealName, setNewMealName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newPrepTime, setNewPrepTime] = useState(0);
  const [newImage, setNewImage] = useState("");
  const [newMealIngredients, setNewMealIngredients] = useState<string[]>([]);
  

  const fetchData = async () => {
    setLoading(true);
    const allMeals = await mealApi.getAllMeals(token);
    const allIngredients = await ingredientApi.getAllIngredients(token);
    setMeals(allMeals);
    setIngredients(allIngredients);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [token]);
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleAddMeal = async () => {
    if (!newMealName || newPrice<1 || newPrepTime < 1 || !newImage || newMealIngredients.length===0) 
    {
      alert("Fill in all fields and select at least 1 ingredient");
      return;
    }
    await mealIngredientApi.addMeal(token, newMealName, newPrice, newImage, newPrepTime, newMealIngredients);
    setMessage({ text: "New meal is added!", type: "success" });   
    setNewMealName("");
    setNewPrice(0);
    setNewPrepTime(0);
    setNewImage("");
    setNewMealIngredients([]);
    fetchData();
  };

  const handleEditMeal = async (meal: Meal) => {
    console.log("Updating meal:", meal);
    await mealApi.updateMeal(token, meal.mealName, meal.price, meal.image, meal.prepTime);
    setMessage({ text: "Menu is updated!", type: "success" });   
    setEditingMeal(null);
    fetchData();
  };

  const handleDeleteMeal = async (meal: Meal) => {
    if (!window.confirm(`Are you sure you want to delete "${meal.mealName}"?`)) return;
    await mealIngredientApi.deleteIngredientsFromMeal(token, meal.mealName);
    await mealApi.removeMeal(token, meal.mealName);
    setMessage({ text: "Menu is deleted!", type: "success" });   
    fetchData();
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading meals...</p>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-7xl w-full mx-auto mt-10">
      {message && (
        <div
          className={`px-4 py-2 rounded-lg text-white font-semibold mb-4 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Meals</h2>

      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <input type="text" placeholder="Meal name" value={newMealName} 
          onChange={e => setNewMealName(e.target.value)} className="flex-1 p-2 border rounded" />
        <input 
          type="number" 
          min={0} 
          placeholder="Price" 
          value={newPrice} 
          onChange={e => setNewPrice(Math.max(0, Number(e.target.value)))} 
          className="w-24 p-2 border rounded" />
        <input 
          type="number"
          min={0} 
          placeholder="Prep Time" 
          value={newPrepTime} 
          onChange={e => setNewPrepTime(Math.max(0, Number(e.target.value)))} 
          className="w-24 p-2 border rounded" />
        <input 
          type="text" 
          placeholder="Image name" 
          value={newImage} 
          onChange={e => setNewImage(e.target.value)} 
          className="flex-1 p-2 border rounded" />

        <select 
          multiple value={newMealIngredients} 
          onChange={e => setNewMealIngredients(Array.from(e.target.selectedOptions, option => option.value))} 
          className="flex-1 p-2 border rounded">
          {ingredients.sort((a, b) => a.ingredientName.localeCompare(b.ingredientName)).map(ing => (
            <option key={ing.idIngredient} value={ing.ingredientName}>{ing.ingredientName} {ing.alergen ? "(Allergen)" : ""}</option>
          ))}
        </select>

        <button onClick={handleAddMeal} 
          className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition cursor-pointer"
          >Add Meal</button>
      </div>

      <div className="overflow-x-auto">
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
    </div>
  );
}
