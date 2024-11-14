import mongoose from "mongoose";
import MissileModel, { IMissile } from "../models/MissileModel";
import { areaEnum } from "../types/Area";
import UserModel, { IUser } from "../models/UserModel";
import SuccessOrNot, { ISuccess, successSchema } from "../models/SuccessOrNotModel";
import SuccessOrNotModel from "../models/SuccessOrNotModel";
import AmountOfMissiles from "../types/AmountOfMissiles";

export const gamerMissiles = async (userId: mongoose.Schema.Types.ObjectId) => {
    const user: IUser | any = await UserModel.findOne({ _id: userId })
    return user?.resources
}

export const wasIntercept = async (event: ISuccess) => {
    const newIntercept = new SuccessOrNotModel(event)
    await newIntercept.save()
    return
}

export const relevantInterceptors = async (bumNmae: IMissile) => {
    const missile = await MissileModel.findOne({ name: bumNmae })
    return missile?.intercepts
}

export const shutingBum = async (bumName: IMissile, userId: String) => {
    const user: IUser | undefined = await UserModel.findById(userId) as IUser
    const resa = user.resources
    resa.map((msl: any) => msl.name == bumName ? msl.amount = msl.amount - 1 : msl)
    const res = await UserModel.findOneAndUpdate({ _id: userId },
        user)
}

export const historyListDefence = async (area: areaEnum) => {
    const history = await SuccessOrNotModel.find({ area })
    return history
}

export const historyListAttack = async (user_id: String) => {
    const history = await SuccessOrNotModel.find({ user_id })
    return history
}

export const addToSuccess = async (user_id: String,bumName:string,area:areaEnum) => {
    const newEvent = new SuccessOrNotModel({user_id,missile:bumName,area})
    await newEvent.save()
}

export const speedOfMissile = async(bumName:string)=>{
    const msl = await MissileModel.findOne({name:bumName})
    return msl?.speed
}