import { Schema, model, Document } from 'mongoose';
import { IUser } from './user.types';


class UserSchema extends Schema {
    constructor() {
        super({
            first_name: {
                type: String,
                required: true
            },
            last_name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique:true
            },
            password: {
                type: String,
                required: true
            }
        })
    }
}

type UserDocument = Document & IUser;

const UserModel = model<UserDocument>('User', new UserSchema());

export default UserModel;



