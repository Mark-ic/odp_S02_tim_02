import { useState } from "react";
import { menuApi } from "../../../../api_services/menu/MenuAPIService";
import { validateMenuName } from "../../../../api_services/validators/add&editMenu/MenuValidator";

interface MenuAddProps {
  token: string;
  onAdded: () => void;
}

export function MenuAdd({ token, onAdded }: MenuAddProps) {
  const [newMenuName, setNewMenuName] = useState("");

  const handleAddMenu = async () => {
    const validation = validateMenuName(newMenuName);
    if (!validation.succsess) {
      alert(validation.message);
      return;
    }

    await menuApi.createMenu(token, false, newMenuName);
    setNewMenuName("");
    onAdded();
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-5xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Menu</h2>
      <div className="flex gap-3 flex-wrap justify-center">
        <input
          type="text"
          placeholder="Menu name"
          value={newMenuName}
          onChange={e => setNewMenuName(e.target.value)}
          className="flex-1 p-3 border rounded-xl"
        />
        <button
          onClick={handleAddMenu}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold transition cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}
