import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateMeal(
  name?: string,
  price?: number,
  prepTime?: number,
  image?: string,
  ingredients?: string[]
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

  if (!image || image.trim().length < 1) {
    return { succsess: false, message: "Image name cannot be empty" };
  }

  const lowerImage = image.toLowerCase();
  if (!lowerImage.endsWith(".png") && !lowerImage.endsWith(".jpg")) {
    return { succsess: false, message: "Image must be a .png or .jpg file" };
  }

  if (!image || image.trim() === "") {
    return { succsess: false, message: "Image name cannot be empty" };
  }

  if (!ingredients || ingredients.length === 0) {
    return { succsess: false, message: "Select at least one ingredient" };
  }


  return { succsess: true };
}
