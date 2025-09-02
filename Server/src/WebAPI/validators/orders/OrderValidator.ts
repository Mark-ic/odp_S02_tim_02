import { DeliveryType } from "../../../Domain/enums/orders/DeliveryTypeEnum";
import { OrderStatus } from "../../../Domain/enums/orders/orderStatusEnum";
import { AuthValidType } from "../../../Domain/types/auth/AuthValidyType";

export function OrderValidator(
    timeLeft: number,
    status: OrderStatus,
    deliveryType: DeliveryType,
    adress: string,
    idJelo: number,
    idKorisnik: number
): AuthValidType {

    if (typeof timeLeft !== "number" || timeLeft < 0) {
        return { success: false, message: "Time left must be a positive number" };
    }

    if (!Object.values(OrderStatus).includes(status)) {
        return { success: false, message: "Invalid order status" };
    }

    if (!Object.values(DeliveryType).includes(deliveryType)) {
        return { success: false, message: "Invalid delivery type" };
    }

    const adressRegex = /^[A-Za-z0-9\s\.\/]+$/

    if (adress.length>0 && !adressRegex.test(adress)) {
        return { success: false, message: "Address must contain only letters, numbers and spaces" };
    }

    if (typeof idJelo !== "number" || idJelo <= 0) {
        return { success: false, message: "Meal ID must be a positive number" };
    }

    if (typeof idKorisnik !== "number" || idKorisnik <= 0) {
        return { success: false, message: "User ID must be a positive number" };
    }

    return { success: true, message: "Order is valid" };
}