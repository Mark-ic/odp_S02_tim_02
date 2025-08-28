import { AuthValidType } from "../../../Domain/types/auth/AuthValidyType";

export function MenuValidator(name?:string, daily?:any):AuthValidType{

    const nameRegex = /^[A-Za-z][A-Za-z0-9]*$/;

    if (!name || !nameRegex.test(name)) {
        return {
            success: false,
            message: "Name must start with a letter and contain only letters and numbers."
        };
    }

    if (typeof daily !== "boolean") {
        return {
            success: false,
            message: "Daily must be a boolean value."
        };
    }

    return {success: true};
}