import { Console } from "console";
import { UserAuthDTO } from "../../Domain/DTOs/auth/UserAuthDTO";
import { User } from "../../Domain/models/User";
import { IuserRepository } from "../../Domain/repositories/users/IUserRepository";
import { IAuthService } from "../../Domain/services/auth/IAuthService";
import bcrypt from "bcryptjs"

export class AuthService implements IAuthService{
    private userRepo :IuserRepository;
    public constructor(userRepo: IuserRepository){
        this.userRepo = userRepo;
    }

    async login(username: string, password: string): Promise<UserAuthDTO> {
        const user = await this.userRepo.getByUsername(username);

        if(user.idUser === 0)
            return new UserAuthDTO(undefined,undefined,undefined,"NO_USER");
        if(!await bcrypt.compare(password,user.password))
            return new UserAuthDTO(undefined,undefined,undefined,"BAD_PASSWORD");

        return new UserAuthDTO(user.idUser,user.username,user.role,"OK")
    }
    async register(username: string, phone: string, role: string,password:string): Promise<UserAuthDTO> {
        const exists = await this.userRepo.getByUsername(username);

        if(exists.idUser !== 0){
           return new UserAuthDTO(undefined,undefined,undefined,"NO_USER");
        }
        const hashedPassowrd = await bcrypt.hash(password,10);
        const user: User =  new User(0,username,phone,role,hashedPassowrd);
        const newUser: User = await this.userRepo.create(user);

        if(newUser.idUser !== 0){
            return new UserAuthDTO(newUser.idUser,newUser.username,newUser.role,"OK");
        }

        return new UserAuthDTO(undefined,undefined,undefined,"NO_USER");
    }

}