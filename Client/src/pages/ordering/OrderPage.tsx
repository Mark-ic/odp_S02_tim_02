import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReadValueByKey } from "../../helpers/local_storage";
import type { Meal } from "../../models/meal/Meal";
import { mealApi } from "../../api_services/meal/MealAPIService";
import { OrderForm } from "../../components/order/OrderForm";

export default function OrderPage() {
  const { mealId } = useParams<{ mealId: string }>();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

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

      <OrderForm
        meal={meal}
        onCancel={() => navigate(-1)}
        
      />
    </div>
  );
}
