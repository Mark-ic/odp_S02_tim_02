import { useEffect, useState } from "react";
import type { Menu } from "../../../../models/menu/Menu";
import { MenuAdd } from "./AddMenu";
import { MenuList } from "./MenuList";
import { menuApi } from "../../../../api_services/menu/MenuAPIService";
import toast from "react-hot-toast";

interface MenuTabProps {
  token: string;
}

export function MenuTab({ token }: MenuTabProps) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
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

  const handleEditMenu = async (menu: Menu) => {
    const oldMenu = menus.find((m) => m.idMenu === menu.idMenu);
    if (!oldMenu) return;

    const updated = await menuApi.updateMenuName(token, oldMenu.menuName, menu.menuName);

    if (updated.idMenu !== 0) {
      setMenus((prev) =>
        prev.map((m) =>
          m.idMenu === updated.idMenu ? { ...m, menuName: updated.menuName } : m
        )
      );
    }
    setEditingMenu(null);
  };


  const handleDeleteMenu = async (menu: Menu) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${menu.menuName}"?`
    );
    if (!confirmed)  
      return;
    await menuApi.deleteMenu(token, menu.menuName);
    toast.success("Menu is deleted!");
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
