import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateOrder(deliveryType: "DELIVERY" | "PICKUP", address: string): ResultOfValidation {
  if (deliveryType === "DELIVERY") {
    if (!address || address.trim() === "") {
      return { succsess: false, message: "Address is required for delivery." };
    }
    if (address.trim().length < 5) {
      return { succsess: false, message: "Address must be at least 5 characters long." };
    }
  }
  return { succsess: true };
}
