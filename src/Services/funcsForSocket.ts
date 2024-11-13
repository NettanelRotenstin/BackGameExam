import MissileModel from "../models/MissileModel";
import { areaEnum } from "../types/Area";

export const areaDefenceMissiles = async(area:areaEnum)=>{
    const missiles = await MissileModel.find({})
}