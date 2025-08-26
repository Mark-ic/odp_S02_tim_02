import { AuthValidType } from "../../../Domain/types/auth/AuthValidyType";

export function AuthRequestValidators(username?: string, password?: string, phone?: string, role?: string): AuthValidType {
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

    const phoneRegex = /^(?:\+\d{1,3}[ \-/]?)?(?:\d[ \-/]?){7,12}\d$/;
    if (phone != null && !phoneRegex.test(phone)) {
        return { succsess: false, message: 'phone number not in right format' };
    }

    if (role != null && role !=='user' && role !== 'admin') {
        return { succsess: false, message: 'role does not exists!'};

    }
    return { succsess: true };

}



