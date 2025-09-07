import { useEffect, useState } from "react";
import type { Meal } from "../../../../models/meal/Meal";
import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { mealApi } from "../../../../api_services/meal/MealAPIService";
import { ingredientApi } from "../../../../api_services/ingredient/IngredientAPIService";
import { mealIngredientApi } from "../../../../api_services/meal/mealIngredient/MealIngredientAPIService";
import { MealAdd } from "./AddMeal";
import { MealList } from "./MealList";
import toast from "react-hot-toast";

interface MealTabProps {
  token: string;
}

export function MealTab({ token }: MealTabProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMeal, setEditingMeal] = useState<Meal | null>(null);

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

  const handleEditMeal = async (meal: Meal) => {
    await mealApi.updateMeal(token, meal.mealName, meal.price, meal.image, meal.prepTime);
    setEditingMeal(null);
    fetchData();
  };

  const handleDeleteMeal = async (meal: Meal) => {
    if (!window.confirm(`Are you sure you want to delete "${meal.mealName}"?`)) return;
    await mealIngredientApi.deleteIngredientsFromMeal(token, meal.mealName); 
    await mealApi.removeMeal(token, meal.mealName);
    toast.success("Meal deleted successfully!");
    fetchData();
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading meals...</p>;

  return (
    <div className="flex flex-col gap-6 w-full">
      <MealAdd token={token} ingredients={ingredients} onAdded={fetchData} />
      <MealList 
        meals={meals} 
        editingMeal={editingMeal} 
        setEditingMeal={setEditingMeal} 
        handleEditMeal={handleEditMeal} 
        handleDeleteMeal={handleDeleteMeal} 
        token={token} 
      />
    </div>
  );
}
