import { model, Schema } from "mongoose";
import { KindMissiles } from "../types/KindMissiles";

interface ISuccess extends Document {
    missile: KindMissiles | undefined
    success: boolean
}

const successSchema = new Schema<ISuccess>({
    missile: {
        type: KindMissiles,
    },
    success: {
        type: Boolean,
        default:false
    }
});

export default model<ISuccess>("success", successSchema);