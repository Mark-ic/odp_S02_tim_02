import type { Menu } from "../../../../models/menu/Menu";
import { MenuRow } from "./MenuRow";

interface MenuListProps {
  menus: Menu[];
  editingMenu: Menu | null;
  setEditingMenu: (menu: Menu | null) => void;
  handleEditMenu: (menu: Menu) => void;
  handleDeleteMenu: (menu: Menu) => void;
  handleSetDailyMenu: (menu: Menu) => void;
  handleRemoveDailyMenu: (menu: Menu) => void;
}

export function MenuList({
  menus,
  editingMenu,
  setEditingMenu,
  handleEditMenu,
  handleDeleteMenu,
  handleSetDailyMenu,
  handleRemoveDailyMenu,
}: MenuListProps) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-5xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Menus List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Menu name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Daily menu</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
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
        {menus.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No menus found.</p>
        )}
      </div>
    </div>
  );
}
