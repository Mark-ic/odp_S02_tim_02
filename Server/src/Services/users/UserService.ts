import bcrypt from "bcryptjs";
import { UserAuthDTO } from "../../Domain/DTOs/auth/UserAuthDTO";
import { User } from "../../Domain/models/User";
import { IuserRepository } from "../../Domain/repositories/users/IUserRepository";
import { IUserService } from "../../Domain/services/user/IUserService";

export class UserService implements IUserService {
    private userRepo: IuserRepository;
    public constructor(userRepo: IuserRepository) {
        this.userRepo = userRepo;
    }

    async getAllUsers(): Promise<UserAuthDTO[]> {
        return await this.userRepo.getAllUsers();
    }


    async changeUser(username: string, phone: string, role: string, password: string): Promise<UserAuthDTO> {
        const user = await this.userRepo.getByUsername(username);
        if (user.idUser === 0) {
            return new UserAuthDTO(undefined,undefined,undefined,"NO_USER");
        }

        const hashedPassowrd = await bcrypt.hash(password,10);

        const result = await this.userRepo.updateUser(new User(user.idUser,username,phone,role,hashedPassowrd));
        if(result.id !==0 ){
            return result;
        }
        return new UserAuthDTO(undefined,undefined,undefined,"OTHER");
    }
    async deleteUser(username: string): Promise<Boolean> {
        const user = await this.userRepo.getByUsername(username);
        if (user.idUser === 0) {
            return false;
        }
        const deletedOK = await this.userRepo.deleteUser(user.idUser);
        return deletedOK;
    }

}