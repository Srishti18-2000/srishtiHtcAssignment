import UserModel from "./user.schema";
import { IUser } from "./user.types";

const create = (user: IUser) => UserModel.create(user);

const findOne = (credentials: any) => UserModel.findOne(credentials);


export default {
    create,
    findOne
}
