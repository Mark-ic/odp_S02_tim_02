import { useEffect, useState } from "react";
import type { Menu } from "../../../../models/menu/Menu";
import { MenuAdd } from "./AddMenu";
import { MenuList } from "./MenuList";
import { menuApi } from "../../../../api_services/menu/MenuAPIService";

interface MenuTabProps {
  token: string;
}

export function MenuTab({ token }: MenuTabProps) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMenu, setEditingMenu] = useState<Menu | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const fetchMenus = async () => {
    setLoading(true);
    const allMenus = await menuApi.getAllMenus(token);
    setMenus(allMenus);
    setLoading(false);
  };

  useEffect(() => {
    fetchMenus();
  }, [token]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleEditMenu = async (menu: Menu) => {
    if (!editingMenu) return;
    await menuApi.updateMenuName(token, menu.menuName, editingMenu.menuName);
    setMessage({ text: "Menu is updated!", type: "success" });
    setEditingMenu(null);
    fetchMenus();
  };

  const handleDeleteMenu = async (menu: Menu) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${menu.menuName}"?`
    );
    if (!confirmed)  
      return;
    await menuApi.deleteMenu(token, menu.menuName);
    setMessage({ text: "Menu is deleted!", type: "success" });
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

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading menus...</p>;

  return (
    <div className="flex flex-col gap-6 w-full">
      {message && (
        <div
          className={`px-4 py-2 rounded-lg text-white font-semibold mb-4 text-center ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <MenuAdd token={token} onAdded={fetchMenus} />
      <MenuList
        menus={menus}
        editingMenu={editingMenu}
        setEditingMenu={setEditingMenu}
        handleEditMenu={handleEditMenu}
        handleDeleteMenu={handleDeleteMenu}
        handleSetDailyMenu={handleSetDailyMenu}
        handleRemoveDailyMenu={handleRemoveDailyMenu}
      />
    </div>
  );
}
