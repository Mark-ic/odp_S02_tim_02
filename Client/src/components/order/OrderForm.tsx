import { useState } from "react";
import type { Meal } from "../../models/meal/Meal";

interface OrderFormProps {
  meal: Meal;
  onCancel: () => void;
}

export function OrderForm({ meal, onCancel }: OrderFormProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<"Delivery" | "Pickup">("Delivery");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("poruceno!");
  };

  return (
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

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition cursor-pointer"
          >
            Place Order
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
