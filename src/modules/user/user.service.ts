
import userRepo from "./user.repo";
import { IUser } from "./user.types";
import { ICredentials } from "../../utility/credential.types";


const register = async (user: IUser) => {
    try {
        user = { ...user };
        const userCreated = await userRepo.create(user);
        if (!userCreated) {
            throw { message: 'USER NOT REGISTRED' };
        }
        return { message: 'REGISTRED SUCCESFULLY!!' };
    } catch (e) {
        throw { message: 'SOMETHING WENT WRONG' };
    }

}

const login = async (credentials: ICredentials) => {
    try {
        const userRecord = await userRepo.findOne(credentials);

        if (!userRecord) {
            throw { message: 'INVALID CREDENTIALS' };
        }
        return { message: 'SUCESSFULLY LOGGED IN !!' };
    } catch (e) {
        throw { message: 'SOMETHING WENT WRONG' };
    }
}




export default {
    register,
    login
} 
