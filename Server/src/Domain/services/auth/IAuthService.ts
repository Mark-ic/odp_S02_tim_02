import { UserAuthDTO } from "../../DTOs/auth/UserAuthDTO";

export interface IAuthService{
    login(username:string,password:string):Promise<UserAuthDTO>;
    register(username:string,phone:string,role:string,password:string):Promise<UserAuthDTO>;
}