import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateMeal(
  price?: number,
  prepTime?: number,
  image?: string

): ResultOfValidation {

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

  return { succsess: true };
}
