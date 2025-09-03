import { useEffect, useState } from "react";
import { menuApi } from "../../../../api_services/menu/MenuAPIService";
import type { Menu } from "../../../../models/menu/Menu";
import { MenuRow } from "./MenuRow";

interface MenuTabProps {
  token: string;
}

export function MenuTab({ token }: MenuTabProps) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMenuName, setNewMenuName] = useState("");
  const [editingMenu, setEditingMenu] = useState<Menu | null>(null);

  const fetchMenus = async () => {
    setLoading(true);
    const allMenus = await menuApi.getAllMenus(token);
    setMenus(allMenus);
    setLoading(false);
  };

  useEffect(() => {
    fetchMenus();
  }, [token]);

  const handleAddMenu = async () => {
    if (!newMenuName) return;
    await menuApi.createMenu(token, false, newMenuName);
    setNewMenuName("");
    fetchMenus();
  };

  const handleEditMenu = async (menu: Menu) => {
    if (!editingMenu) return;
    await menuApi.updateMenuName(token, menu.menuName, editingMenu.menuName);
    setEditingMenu(null);
    fetchMenus();
  };

  const handleDeleteMenu = async (menu: Menu) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${menu.menuName}"?`
    );
    if (!confirmed) return;
    //await menuApi.deleteMenu?.(token, menu.idMenu);
    fetchMenus();
  };

  const handleSetDailyMenu = async (menu: Menu) => {
    await menuApi.setDailyMenu(token, menu.menuName);
    fetchMenus();
  };

  const handleRemoveDailyMenu = async (menu: Menu) => {
    await menuApi.removeDailyMenu(token, menu.menuName);
    fetchMenus();
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading menus...</p>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-5xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800"> Menus </h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="New menu name"
          value={newMenuName}
          onChange={(e) => setNewMenuName(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAddMenu}
          className="px-3 py-1.5 bg-green-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition cursor-pointer"
        > Add </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"> Menu name </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"> Daily menu </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"> Actions </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {menus.map((menu) => (
              <MenuRow
                key={menu.idMenu}
                menu={menu}
                editingMenu={editingMenu}
                setEditingMenu={setEditingMenu}
                handleEditMenu={handleEditMenu}
                handleDeleteMenu={handleDeleteMenu}
                handleSetDailyMenu={handleSetDailyMenu}
                handleRemoveDailyMenu={handleRemoveDailyMenu}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
