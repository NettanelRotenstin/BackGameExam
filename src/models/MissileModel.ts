import { Schema, Types, Document, model } from "mongoose";
import { KindMissiles } from "../types/KindMissiles";

export interface IMissile extends Document {
    name: String;
    description: String;
    speed: Number;
    intercepts: KindMissiles[]|undefined
    price: Number;
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
        type: [String],
        enum:KindMissiles
    },
    price: {
        type: Number,
    },
});

export default model<IMissile>("Missile", missileSchema);

