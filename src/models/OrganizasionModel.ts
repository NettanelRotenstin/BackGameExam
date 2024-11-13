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

// {
//     "name": "IDF - North",
//     "resources": [
//       {
//         "name": "Iron Dome",
//         "amount": 25
//       },
//       {
//         "name": "David's Sling",
//         "amount": 15
//       }
//     ],
//     "budget": 8000000
//   },