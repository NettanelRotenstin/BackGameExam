import { connect } from "mongoose";
import 'dotenv/config'
export const connectToMonge = async () => {
    try {
        await connect(process.env.DB_URL as string)
        console.log(`connected to mongo`)
    } catch (error) {
        console.log('error in connect to mongo')
    }
}