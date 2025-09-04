import type { Meal } from "../../../../models/meal/Meal";

interface MealsInMenuProps {
  meals: Meal[];
  loading: boolean;
  onRemove: (mealName: string) => void;
}

export function MealsInMenu({ meals, loading, onRemove }: MealsInMenuProps) {
  if (loading) return <p>Loading...</p>;

  return (
    <table className="min-w-full divide-y divide-gray-200 mb-6">
      <thead className="bg-orange-100">
        <tr>
          <th className="px-4 py-2 text-left">Image</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Price</th>
          <th className="px-4 py-2 text-left">Prep Time</th>
          <th className="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {meals.map((meal) => (
          <tr key={meal.idMeal}>
            <td className="px-4 py-2">
              <img
                src={`/Images/${meal.image}`}
                alt={meal.mealName}
                className="w-20 h-20 object-cover rounded"
              />
            </td>
            <td className="px-4 py-2">{meal.mealName}</td>
            <td className="px-4 py-2">{meal.price.toFixed(2)}</td>
            <td className="px-4 py-2">{meal.prepTime} min</td>
            <td className="px-4 py-2">
              <button
                onClick={() => onRemove(meal.mealName)}
                className="px-3 py-1.5 bg-red-500 hover:bg-red-700 text-white rounded-xl font-semibold transition cursor-pointer"
              > Remove </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
