import { AuthValidType } from "../../../Domain/types/auth/AuthValidyType";

export function AuthRequestValidators(username?: string, password?: string): AuthValidType {
    if (!username || !password) {
        return { succsess: false, message: 'Username and Password cannot be empty' };
    }

    if (username.length < 3) {
        return { succsess: false, message: 'Username must be longer than 3 characters.' };
    }

    if (password.length < 6) {
        return { succsess: false, message: 'Password must be longer than 6 characters.' };
    }

    if (password.length > 20) {
        return { succsess: false, message: 'Password can hold only 20 characters.' };
    }

    return { succsess: true };
}



