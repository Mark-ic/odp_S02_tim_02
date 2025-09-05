import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateMeal(
  name?: string,
  price?: number,
  prepTime?: number

): ResultOfValidation {
  if (!name || name.trim() === "") {
    return { succsess: false, message: "Meal name cannot be empty" };
  }

  if (name.trim().length < 3) {
    return { succsess: false, message: "Meal name must be at least 3 characters long" };
  }

  if (price == null || price < 1) {
    return { succsess: false, message: "Price must be greater than 0" };
  }

  if (prepTime == null || prepTime < 1) {
    return { succsess: false, message: "Prep time must be greater than 0" };
  }

  return { succsess: true };
}
