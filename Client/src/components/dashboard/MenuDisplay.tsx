import { useEffect, useState } from "react";
import type { Menu } from "../../models/menu/Menu";

interface MenuDisplayProps {
  menus: Menu[];
}

export function MenuDisplay({ menus }: MenuDisplayProps) {
  const [todayMenu, setTodayMenu] = useState<Menu | null>(null);

  const todayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday...
  const normalizedToday = todayIndex === 0 ? 6 : todayIndex - 1; // 0 = Monday

  useEffect(() => {
    if (menus && menus.length > 0) {
      setTodayMenu(menus[normalizedToday]);
    }
  }, [menus, normalizedToday]);

  if (!todayMenu) {
    return <p className="text-center text-gray-600 mt-10">Loading menu...</p>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Weekly Menu
      </h1>

      <div className="flex overflow-x-auto gap-4 mb-10 px-2">
    {menus.map((menu, index) => {
        const isToday = index === normalizedToday;
        return (
        <div
            key={menu.idMenu}
            className={`min-w-[120px] p-6 rounded-2xl shadow-md border text-center flex-shrink-0 ${
            isToday ? "bg-green-100 border-green-400 font-bold" : "bg-gray-100 border-gray-300 opacity-100"
            }`}
        >
            <h2 className="text-xl">{menu.menuName}</h2>
            <p className="text-gray-500">{isToday ? "Active today" : "Locked"}</p>
        </div>
        );
    })}
    </div>

      {/* Preporuka dana*/}
      <div className="bg-white/90 backdrop-blur-md shadow-md rounded-2xl p-6 border border-gray-300 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Recommendation of the day
        </h2>
        <p className="text-gray-600">Top 3 meals will be displayed here later</p>
      </div>
    </div>
  );
}
