import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateMenuName(name?: string): ResultOfValidation {
    if (!name || name.trim() === "") {
        return { succsess: false, message: "Menu name cannot be empty" };
    }

    if (name.trim().length < 3) {
        return { succsess: false, message: "Menu name must be at least 3 characters long" };
    }

    if (name.trim().length > 50) {
        return { succsess: false, message: "Menu name can be max 50 characters long" };
    }

    return { succsess: true };
}
