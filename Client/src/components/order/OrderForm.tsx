import { useState } from "react";
import type { Meal } from "../../models/meal/Meal";
import { orderApi } from "../../api_services/order/OrderAPIService";
import type { DeliveryType } from "../../enums/order/DeliveryType";
import type { OrderStatus } from "../../enums/order/OrderStatus";
import { ReadValueByKey } from "../../helpers/local_storage";
import {jwtDecode} from "jwt-decode";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";

interface OrderFormProps {
  meal: Meal;
  onCancel: () => void;
}

export function OrderForm({ meal, onCancel }: OrderFormProps) {
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("DELIVERY");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = ReadValueByKey("authToken");
    if (!token) {
      alert("User not logged in!");
      return;
    }

    let idUser: number;
    try {
      const decoded = jwtDecode<JwtTokenClaims>(token);
      idUser = decoded.id;
    } catch (error) {
      console.error("Invalid token:", error);
      alert("Invalid user token.");
      return;
    }

    const newOrder = {
      timeLeft: meal.prepTime,
      status: "PREPARING" as OrderStatus,
      deliveryType: deliveryType,
      adress: deliveryType === "DELIVERY" ? address.trim() : "",
      idJelo: meal.idMeal,     
      idKorisnik: idUser       
    };
    console.log("Sending order:", newOrder);
    try {
      const created = await orderApi.createOrder(token, newOrder);

      if (created) {
        setMessage({ text: "Order has been successfully created!", type: "success" });
        setTimeout(onCancel, 1000);
      } else {
        alert("There was an error while creating the order.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      {message && (
        <div
          className={`absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-white font-semibold ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}
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
                name="deliveryType"
                value="DELIVERY"
                checked={deliveryType === "DELIVERY"}
                onChange={() => setDeliveryType("DELIVERY")}
              />
              Delivery
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="deliveryType"
                value="PICKUP"
                checked={deliveryType === "PICKUP"}
                onChange={() => { setDeliveryType("PICKUP"); setAddress(""); }}
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
            className={`w-full border border-gray-300 rounded-lg px-3 py-2 ${deliveryType === "PICKUP" ? "bg-gray-200 cursor-default" : ""}`}
            disabled={deliveryType === "PICKUP"}
            required={deliveryType === "DELIVERY"}
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
