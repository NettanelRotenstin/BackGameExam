import { Document, model, Schema } from "mongoose";
import { organizasionsEnum } from "../types/Organizations";
import { areaEnum } from "../types/Area";
import { KindMissiles } from "../types/KindMissiles";
import AmountOfMissiles from "../types/AmountOfMissiles";

const amountMissilesSchema = new Schema<AmountOfMissiles>({
    name: {
        type: String,
        enum: KindMissiles
    },
    amount: {
        type: Number
    }
});

interface IUser extends Document {
    username: string
    password: string
    organization: organizasionsEnum | undefined
    area?: areaEnum
    resources: [AmountOfMissiles]
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
        enum: organizasionsEnum
    },
    area: {
        type: String,
        enum: areaEnum
    },
    resources: {
        type: [amountMissilesSchema]
    }
});

export default model<IUser>("user", userSchema);

