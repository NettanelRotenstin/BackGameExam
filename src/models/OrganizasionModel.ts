import { model, Schema } from "mongoose";
import AmountOfMissiles from "../types/AmountOfMissiles";
import { KindMissiles } from "../types/KindMissiles";

interface IOrganizasion extends Document {
    name: string;
    resources: AmountOfMissiles[];
    budget: number;
}

const amountMissilesSchema = new Schema<AmountOfMissiles>({
    name: {
        type: String,
        enum:KindMissiles
    },
     amount:{
        type:Number
     }
});

const organizasionSchema = new Schema<IOrganizasion>({
    name: {
        type: String
    },
    resources: {
        type: [amountMissilesSchema]
    },
    budget: {
        type: Number,
    },
});

export default model<IOrganizasion>("organizasion", organizasionSchema);

 