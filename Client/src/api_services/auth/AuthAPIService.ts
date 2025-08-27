import type { AuthResponse } from "../../types/auth/AuthResponse";
import type { IAuthAPIService } from "./IAuthAPIService";
import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL + "auth";

export const authApi: IAuthAPIService = {
  async login(username: string, password: string): Promise<AuthResponse> {
    try {
      const res = await axios.post<AuthResponse>(`${API_URL}/login`, {
        username,
        password,
      });

      return res.data;
    } catch (error: any) {
      let message = "Unknown error occurred during login";

      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            message = "Incorrect password";
            break;
          case 404:
            message = "User with this username does not exist";
            break;
          case 418:
            message = "Unknown error";
            break;
          case 500:
            message = "Server error";
            break;
          default:
            message = error.response?.data?.message || message;
        }
      }

      return {
        success: false,
        message,
        data: undefined,
      };
    }
  },

  async register(
    username: string,
    phone: string,
    role: string,
    password: string
  ): Promise<AuthResponse> {
    try {
      const res = await axios.post<AuthResponse>(`${API_URL}/register`, {
        username,
        phone,
        role,
        password,
      });

      return res.data;
    } catch (error: any) {
      let message = "Error occurred during registration";

      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 400:
            message = error.response?.data?.message || "Problems with submitted parameters";
            break;
          case 409:
            message = "An account with this username already exists";
            break;
          case 500:
            message = "Server error";
            break;
          default:
            message = error.response?.data?.message || message;
        }
      }

      return {
        success: false,
        message,
        data: undefined,
      };
    }
  },
};
