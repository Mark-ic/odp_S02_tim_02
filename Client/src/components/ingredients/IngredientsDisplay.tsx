{/*import { useEffect, useState } from "react";
import type { Ingredient } from "../../models/ingredient/Ingredient";
import { mealIngredientApi } from "../../api_services/meal/mealIngredient/MealIngredientAPIService";

interface MealIngredientsProps {
  token: string;
  mealName: string;
}

export function MealIngredients({ token, mealName }: MealIngredientsProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      setError(null);

      if (!token) {
        setError("No token provided");
        setLoading(false);
        return;
      }

      try {
        const data = await mealIngredientApi.getMealIngredients(token, mealName);
        setIngredients(data);
      } catch (err) {
        console.error("Failed to fetch ingredients:", err);
        setError("Failed to fetch ingredients");
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, [token, mealName]);

  if (loading) return <p>Loading ingredients for {mealName}...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (ingredients.length === 0) return <p>No ingredients found for {mealName}.</p>;

  return (
    <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Ingredients for {mealName}</h2>

        <div className="flex font-semibold mb-2">
            <div className="w-20">ID</div>
            <div className="w-48">Name</div>
            <div className="w-32">Category</div>
            <div className="w-20">Allergen</div>
        </div>

        <div className="flex flex-col gap-1">
            {ingredients.map((ing) => (
            <div key={ing.idIngredient} className="flex p-2 rounded hover:bg-gray-100">
                <div className="w-20">{ing.idIngredient}</div>
                <div className="w-48">{ing.ingredientName}</div>
                <div className="w-32">{ing.category}</div>
                <div className="w-20">{ing.alergen ? "Yes" : "No"}</div>
            </div>
            ))}
        </div>
    </div>

  );
} */}




    //sa snalazenjem za imee
import { useEffect, useState } from "react";
import type { Ingredient } from "../../models/ingredient/Ingredient";
import { mealIngredientApi } from "../../api_services/meal/mealIngredient/MealIngredientAPIService";
import { ingredientApi } from "../../api_services/ingredient/IngredientAPIService";

interface MealIngredientsProps {
  token: string;
  mealName: string;
}

export function MealIngredients({ token, mealName }: MealIngredientsProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      setError(null);

      if (!token) {
        setError("No token provided");
        setLoading(false);
        return;
      }

      try {
        const mealIngredients = await mealIngredientApi.getMealIngredients(token, mealName);
        const allIngredients = await ingredientApi.getAllIngredients(token);

        const detailedIngredients = mealIngredients.map((ing) => {
          const match = allIngredients.find((i) => i.idIngredient === ing.idIngredient);
          return match || {
            idIngredient: ing.idIngredient,
            ingredientName: "Unknown",
            category: "Unknown",
            alergen: false,
          };
        });

        setIngredients(detailedIngredients);
      } catch (err) {
        console.error("Failed to fetch ingredients:", err);
        setError("Failed to fetch ingredients");
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, [token, mealName]);

  if (loading) return <p>Loading ingredients for {mealName}...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (ingredients.length === 0) return <p>No ingredients found for {mealName}.</p>;

  return (
    <div>
      <h2 className="text-gray-700 mb-2">Ingredients:</h2>
    <div className="p-3">
      <div className="flex text-semibold mb-2 justify-center">
        <div className="w-48">Name</div>
        <div className="w-32">Category</div>
        <div className="w-20">Allergen</div>
      </div>

      <div className="flex flex-col gap-1 text-gray-700">
        {ingredients.map((ing) => (
          <div key={ing.idIngredient} className="flex p-2 rounded hover:bg-gray-100 justify-center">
            <div className="w-48">{ing.ingredientName}</div>
            <div className="w-32">{ing.category}</div>
            <div className="w-20">{ing.alergen ? "Yes" : "No"}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


