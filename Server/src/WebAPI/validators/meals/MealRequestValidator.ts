import { AuthValidType } from "../../../Domain/types/auth/AuthValidyType";

export function MealRequestValidator(
    mealName?: string,
    price?: number,
    image?: string,
    prepTime?: number
): AuthValidType {
    if (!mealName) {
        return { success: false, message: 'Meal name cannot be empty' };
    }

    if (price === undefined) {
        return { success: false, message: 'Price cannot be empty' };
    }
    if (price <= 0) {
        return { success: false, message: 'Price must be positive number' };
    }

    if (prepTime === undefined) {
        return { success: false, message: 'Preperation time cannot be empty' };
    }
    if (prepTime <= 0) {
        return { success: false, message: 'Preperation time must be positive number' };
    }

    const pathRegex = /^\/?[a-zA-Z0-9\/._-]*$/;
    
    if (image === undefined) {
        return { success: false, message: 'Image field cannot be empty' };
    }

    if (!pathRegex.test(image)) {
        return { success: false, message: 'Image route not valid'};
    }
    return { success: true };
}
