import { model, Schema } from "mongoose";

interface IUser extends Document {
    username: string
    password:string
    organization:Organizasions
    area?:areaEnum
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

 