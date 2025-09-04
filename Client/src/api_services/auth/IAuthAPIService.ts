import type { AuthResponse } from "../../types/auth/AuthResponse";

export interface IAuthAPIService {
  login(username:string,password:string): Promise<AuthResponse>;
  register(username:string,phone:string,role:string,password:string): Promise<AuthResponse>;
}