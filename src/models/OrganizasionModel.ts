import { model, Schema } from "mongoose";
import AmountOfMissiles from "../types/AmountOfMissiles";

interface IOrganizasion extends Document {
    name: string;
    resources: [AmountOfMissiles];
    budget: number;
}

const organizasionSchema = new Schema<IOrganizasion>({
    name: {
        type: String,
    },
    resources: {
        type: []
    },
    budget: {
        type: Number,
    },
});

export default model<IOrganizasion>("organizasion", organizasionSchema);

 