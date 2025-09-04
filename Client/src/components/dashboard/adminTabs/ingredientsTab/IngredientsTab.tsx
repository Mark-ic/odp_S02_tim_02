import { useEffect, useState } from "react";
import type { Ingredient } from "../../../../models/ingredient/Ingredient";
import { ingredientApi } from "../../../../api_services/ingredient/IngredientAPIService";
import { IngredientAdd } from "./AddIngredient";
import { IngredientList } from "./IngredientList";

interface IngredientsTabProps {
  token: string;
}

export function IngredientsTab({ token }: IngredientsTabProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [groups, setGroups] = useState<string[]>([]);

  const fetchData = async () => {
    const data = await ingredientApi.getAllIngredients(token);
    setIngredients(data);
    const groupData = await ingredientApi.getAllIngredientGroups(token);
    setGroups(groupData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full">
      <IngredientAdd token={token} groups={groups} onAdded={fetchData} />
      <IngredientList token={token} ingredients={ingredients} onDeleted={fetchData} />
    </div>
  );
}
