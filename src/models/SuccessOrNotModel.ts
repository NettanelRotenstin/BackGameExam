import mongoose, { model, Schema } from "mongoose";
import { KindMissiles } from "../types/KindMissiles";
import { areaEnum } from "../types/Area";

export interface ISuccess extends Document {
    user_id?:string
    missile: KindMissiles | undefined
    area:areaEnum
    success: boolean
}

export const successSchema = new Schema<ISuccess>({
    user_id:{
        type:mongoose.Schema.ObjectId
    },
    missile: {
        type: String,
        enum:KindMissiles,
    },
    area:{
        type:String,
        enum:areaEnum
    },
    success: {
        type: Boolean,
        default:false
    }
});

export default model<ISuccess>("success", successSchema);