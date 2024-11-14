import { Socket } from "socket.io";
import { io } from "../app";
import { addToSuccess, gamerMissiles, historyListAttack, historyListDefence, relevantInterceptors, shutingBum, speedOfMissile, wasIntercept } from "./funcsForSocket";
import mongoose from "mongoose";
import { areaEnum } from "../types/Area";
import SuccessOrNotModel from "../models/SuccessOrNotModel";

export const handelSocketConnection = async (client: Socket) => {
    client.on('join',(room)=>{
        client.join(room)
    })
    //when client connect he will get his missiles
    client.on("iAmConnectedDefence", async (data) => {
        client.emit('relevantMissiles', await gamerMissiles(data.user_id))
        client.emit('historyDefence', await historyListDefence(data.area))
    })
    client.on("iAmConnectedAttack", async (data) => {
        client.emit('relevantMissiles', await gamerMissiles(data ))
        client.emit('historyAttack', await historyListAttack(data))
    })

    //when client shuting attack
    client.on("shutingAttack", async (data) => {
        await shutingBum(data.bumName, data.user_id)
        await addToSuccess(data.user_id, data.bumName, data.area)
        const dataToReturn = {interceptors:await relevantInterceptors(data.bumName),speed:await speedOfMissile(data.bumName),bumName:data.bumName}
        io.to(data.area).emit("attack",dataToReturn)
        client.emit('relevantMissiles', await gamerMissiles(data.user_id))
        client.emit('historyAttack', await historyListAttack(data.user_id))
    })
    //when client shuting defence
    client.on("shutingDefence", async (data) => {
        await shutingBum(data.bumName, data.user_id)
        await addToSuccess(data.user_id, data.bumName, data.area)
        client.emit('relevantMissiles', await gamerMissiles(data.user_id))
        client.emit("historyDefence", await historyListDefence(data.area))
    })
    //after client shuting
    client.on("intercept", async (data) => {
        await wasIntercept(data.success)
    })

    client.on("historyDefence", async (area: areaEnum) => {
        client.emit("historyDefence", await historyListDefence(area))
    })

    client.on("historyAttack", async (userId: string) => {
        client.emit("historyAttack", await historyListAttack(userId))
    })

}