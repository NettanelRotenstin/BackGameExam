import { model, Schema } from "mongoose";
import { organizasionsEnum } from "../types/Organizations";
import { areaEnum } from "../types/Area";

interface IUser extends Document {
    username: string
    password: string
    organization: organizasionsEnum | undefined
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
        type: String,
        enum:organizasionsEnum
    },
    area: {
        type: String,
        enum:areaEnum
    }
});

export default model<IUser>("user", userSchema);

