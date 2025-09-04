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
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-5xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Ingredient</h2>
      <div className="flex gap-3 flex-wrap justify-center">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="flex-1 p-3 border rounded-xl"
        />
        <select
          value={newGroup}
          onChange={e => setNewGroup(e.target.value)}
          className="flex-1 p-3 border rounded-xl cursor-pointer"
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
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold transition cursor-pointer"
        > Add </button>
      </div>
    </div>
  );
}
