import { model, Schema } from "mongoose";
import { OrganizasionsEnum } from "../types/Organizations";
import { areaEnum } from "../types/Area";

interface IUser extends Document {
    username: string
    password: string
    organization: OrganizasionsEnum | undefined
    area?: areaEnum
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
    },
    password: {
        type: String
    },
    organization: {
        type: OrganizasionsEnum,
    },
    area: {
        type: areaEnum
    }
});

export default model<IUser>("user", userSchema);

