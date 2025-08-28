import { AuthValidType } from "../../../Domain/types/auth/AuthValidyType";

export function IngredientsValidator
    (ingredientName?: string,category?: string,alergen?: any): AuthValidType {
    if (!ingredientName || ingredientName.trim() === "") {
        return { success: false, message: "Ingredient name cannot be empty" };
    }

    if (/\d/.test(ingredientName)) {
        return { success: false, message: "Ingredient name cannot contain numbers" };
    }

    if (!category || category.trim() === "") {
        return { success: false, message: "Category cannot be empty" };
    }

    if (/\d/.test(category)) {
        return { success: false, message: "Category cannot contain numbers" };
    }

    if (typeof alergen !== "boolean") {
        return { success: false, message: "Alergen must be a boolean value" };
    }

    return { success: true };
}

