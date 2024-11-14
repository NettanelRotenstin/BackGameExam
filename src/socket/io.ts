import { Socket } from "socket.io";
import { io } from "../app";
import { gamerMissiles, historyListDefence, relevantInterceptors, shutingBum, wasIntercept } from "./funcsForSocket";
import mongoose from "mongoose";
import { areaEnum } from "../types/Area";
import SuccessOrNotModel from "../models/SuccessOrNotModel";

export const handelSocketConnection = async (client: Socket) => {
    //when client connect he will get his missiles
    client.on("iAmConnected", async (data) => {
        client.emit('relevantMissiles', await gamerMissiles(data))
    })
    //when there is an attack clients in this area will get relevant missiles
    client.on("attack", async (data) => {
        io.to(data.area).emit("attack", await relevantInterceptors(data.bumName))
    })
    //when client shuting attack
    client.on("shutingAttack", async (data) => {
        client.emit("attack", { interceptor: await relevantInterceptors(data.bumName), missilesLeft: await gamerMissiles })
    })
      //when client shuting defence
      client.on("shutingDefence", async (data) => {
        await shutingBum(data.bumName,data.user_id)
        //client.emit('relevantMissiles', await gamerMissiles(data))
    })
    //after client shuting
    client.on("intercept", async (data) => {
          await wasIntercept(data.success)
    })

    client.on("historyDefence",async(area:areaEnum)=>{
        client.emit("historyDefence",await historyListDefence(area))
    })

    client.on("historyAttack",async(userId:string)=>{
        const data = await SuccessOrNotModel.find({})
        client.emit("historyDefence",data)
    })

}