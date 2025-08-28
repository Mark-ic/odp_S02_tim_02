import { UserAuthDTO } from "../../DTOs/auth/UserAuthDTO";

export interface IUserService{
    changeUser(username:string,phone:string,role:string,password:string):Promise<UserAuthDTO>;
    deleteUser(username:string):Promise<Boolean>;
}