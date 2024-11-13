import { Schema, Types, Document, model } from "mongoose";
import { KindMissiles } from "../types/KindMissiles";

export interface IMissile extends Document {
    name: string;
    description: string;
    speed: number;
    intercepts: [KindMissiles]
    price: number;
}

const missileSchema = new Schema<IMissile>({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    speed: {
        type: Number,
    },
    intercepts: {
        type: [KindMissiles]
    },
    price: {
        type: Number,
    },
});

export default model<IMissile>("Missile", missileSchema);
