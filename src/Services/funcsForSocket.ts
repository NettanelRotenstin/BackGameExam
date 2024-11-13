import mongoose from "mongoose";
import MissileModel, { IMissile } from "../models/MissileModel";
import { areaEnum } from "../types/Area";
import UserModel from "../models/UserModel";
import SuccessOrNot, { ISuccess } from "../models/SuccessOrNotModel";
import SuccessOrNotModel from "../models/SuccessOrNotModel";

export const areaMissiles = async(userId:mongoose.Schema.Types.ObjectId)=>{
    const user:any = await UserModel.find({_id:userId})
    return user.resources
}

export const wasIntercept = async(event:ISuccess)=>{
    const newIntercept = new SuccessOrNotModel(event)
    await newIntercept.save()
    return
}

export const relevantInterceptors = async(bumNmae:IMissile)=>{
    const missile = await MissileModel.findOne({name:bumNmae})
    const time = missile?.speed
    return missile?.intercepts 
}

export const shutingBum = async(bumName:IMissile,userId:mongoose.Schema.Types.ObjectId)=>{
    const user:any = await UserModel.find({_id:userId})
    const resur = user.resources
    const update = resur.map((msl:any) => msl.name == bumName ? msl.amount -= 1:msl)
    user.resources = update
    await user.save()
}

