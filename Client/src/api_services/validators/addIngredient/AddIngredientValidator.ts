import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateIngredient(name?: string, group?: string): ResultOfValidation {
  if (!name || name.trim() === "") {
    return { succsess: false, message: "Ingredient name cannot be empty" };
  }

  if (name.trim().length < 2) {
    return { succsess: false, message: "Ingredient name must be at least 2 characters long" };
  }

  if (!group || group.trim() === "") {
    return { succsess: false, message: "Ingredient group must be selected" };
  }

  return { succsess: true };
}
