import { useState } from "react";
import { ingredientApi } from "../../../../api_services/ingredient/IngredientAPIService";

interface IngredientAddProps {
  token: string;
  groups: string[];
  onAdded: () => void;
}

export function IngredientAdd({ token, groups, onAdded }: IngredientAddProps) {
  const [newName, setNewName] = useState("");
  const [newGroup, setNewGroup] = useState("");
  const [isAllergen, setIsAllergen] = useState(false);

  const handleAddIngredient = async () => {
    if (!newName || !newGroup) {
      alert("Fill in all fields!");
      return;
    }
    await ingredientApi.createIngredient(token, newName, newGroup, isAllergen);
    setNewName("");
    setNewGroup("");
    setIsAllergen(false);
    onAdded();
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Add Ingredient</h2>
      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="border rounded p-2"
        />
        <select
          value={newGroup}
          onChange={e => setNewGroup(e.target.value)}
          className="border rounded p-2 cursor-pointer"
        >
          <option value="">Select group</option>
          {groups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isAllergen}
            onChange={e => setIsAllergen(e.target.checked)}
          />
          Allergen
        </label>
        <button
          onClick={handleAddIngredient}
          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 cursor-pointer"
        > Add </button>
      </div>
    </div>
  );
}
