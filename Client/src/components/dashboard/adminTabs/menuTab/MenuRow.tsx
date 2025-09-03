import type { Menu } from "../../../../models/menu/Menu";

interface MenuRowProps { menu: Menu; editingMenu: Menu | null; setEditingMenu: (menu: Menu | null) => void; handleEditMenu: (menu: Menu) => void;
  handleDeleteMenu: (menu: Menu) => void;  handleSetDailyMenu: (menu: Menu) => void;  handleRemoveDailyMenu: (menu: Menu) => void;
}

export function MenuRow({ menu, editingMenu, setEditingMenu, handleEditMenu, handleDeleteMenu, 
    handleSetDailyMenu, handleRemoveDailyMenu,}: MenuRowProps) 
{
  const isEditing = editingMenu?.idMenu === menu.idMenu;

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3">
        {isEditing ? (
          <input
            type="text"
            value={editingMenu.menuName}
            onChange={(e) =>
              setEditingMenu({ ...editingMenu, menuName: e.target.value })
            }
            className="border p-1 rounded w-full"
          />
        ) : (menu.menuName)}
      </td>
      <td className="px-4 py-3">{menu.dailyMenu ? "Yes" : "No"}</td>
      <td className="px-4 py-3 flex gap-2 flex-wrap">
        {isEditing ? (
          <button
            onClick={() => handleEditMenu(menu)}
            className="px-3 py-1.5 bg-blue-400 hover:bg-blue-700 text-white rounded-xl font-semibold transition cursor-pointer"
          > Save
          </button>
        ) : (
          <button
            onClick={() => setEditingMenu(menu)}
            className="px-3 py-1.5 bg-orange-400 hover:bg-orange-700 text-white rounded-xl font-semibold transition cursor-pointer"
          > Edit
          </button>
        )}

        <button
          onClick={() => handleDeleteMenu(menu)}
          className="px-3 py-1.5 bg-red-500 hover:bg-red-700 text-white rounded-xl font-semibold transition cursor-pointer"
        > Delete
        </button>

        {menu.dailyMenu ? (
          <button
            onClick={() => handleRemoveDailyMenu(menu)}
            className="px-3 py-1.5 bg-gray-400 hover:bg-gray-700 text-white rounded-xl font-semibold transition cursor-pointer"
          > Remove Daily
          </button>
        ) : (
          <button
            onClick={() => handleSetDailyMenu(menu)}
            className="px-3 py-1.5 bg-green-400 hover:bg-green-700 text-white rounded-xl font-semibold transition cursor-pointer"
          > Set Daily
          </button>
        )}
      </td>
    </tr>
  );
}
