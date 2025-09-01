import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReadValueByKey } from "../../helpers/local_storage";
import type { Meal } from "../../models/meal/Meal";
import { mealApi } from "../../api_services/meal/MealAPIService";

export default function OrderPage() {
  const { mealId } = useParams<{ mealId: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  const [deliveryMethod, setDeliveryMethod] = useState<"Delivery" | "Pickup">("Delivery");
  const [address, setAddress] = useState("");

  const token = ReadValueByKey("authToken") || "";

  useEffect(() => {
    const fetchMeal = async () => {
      if (!mealId || !token) return;
      setLoading(true);
      try {
        const allMeals = await mealApi.getAllMeals(token);
        const selectedMeal = allMeals.find(m => m.idMeal === Number(mealId)) || null;
        setMeal(selectedMeal);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchMeal();
  }, [mealId, token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Order submitted`
    );
    
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading meal...</p>;
  if (!meal) return <p className="text-center mt-10 text-gray-600">Meal not found.</p>;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6"
      style={{
        backgroundImage: "url(/Images/background2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-orange-600">{meal.mealName}</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <img
          src={`/Images/${meal.image}`}
          alt={meal.mealName}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-1 font-bold">Price: ${meal.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-4">Prep Time: {meal.prepTime} min</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <span className="block text-gray-700 mb-1">Delivery Method:</span>
            <div className="flex gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Delivery"
                  checked={deliveryMethod === "Delivery"}
                  onChange={() => setDeliveryMethod("Delivery")}
                />
                Delivery
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Pickup"
                  checked={deliveryMethod === "Pickup"}
                  onChange={() => setDeliveryMethod("Pickup")}
                />
                Pickup
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter delivery address"
              className={`w-full border border-gray-300 rounded-lg px-3 py-2 ${
                deliveryMethod === "Pickup" ? "bg-gray-200 cursor-default" : ""
              }`}
              disabled={deliveryMethod === "Pickup"}
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
