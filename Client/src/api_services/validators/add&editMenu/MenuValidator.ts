import type { ResultOfValidation } from "../../../types/validation/ValidationResult";

export function validateMenuName(name?: string): ResultOfValidation {
    if (!name || name.trim() === "") {
        return { succsess: false, message: "Menu name cannot be empty" };
    }
    const trimmed = name.trim();

    if (trimmed.length < 3) {
        return { succsess: false, message: "Menu name must be at least 3 characters long" };
    }

    if (trimmed.length > 50) {
        return { succsess: false, message: "Menu name can be max 50 characters long" };
    }

    const regex = /^[A-Za-z]+$/;
    if (!regex.test(trimmed)) {
        return { succsess: false, message: "Menu name must contain only letters without spaces" };
    }

    return { succsess: true };
}
