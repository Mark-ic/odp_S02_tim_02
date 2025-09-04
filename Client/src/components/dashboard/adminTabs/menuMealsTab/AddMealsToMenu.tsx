import type { Meal } from "../../../../models/meal/Meal";

interface AddMealsToMenuProps {
  allMeals: Meal[];
  menuMeals: Meal[];
  onAdd: (mealName: string) => void;
}

export function AddMealsToMenu({ allMeals, menuMeals, onAdd }: AddMealsToMenuProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {allMeals
        .filter((m) => !menuMeals.some((mm) => mm.idMeal === m.idMeal))
        .map((meal) => (
          <button
            key={meal.idMeal}
            onClick={() => onAdd(meal.mealName)}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          > {meal.mealName} </button>
        ))}
    </div>
  );
}
