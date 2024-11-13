import { Socket } from "socket.io";
import { io } from "../app";
import { areaMissiles, relevantInterceptors, wasIntercept } from "./funcsForSocket";

export const handelSocketConnection = async (client: Socket) => {
    //when client connect he will get his missiles
    io.on("iAmConnected", async (data) => {
        client.emit('relevantMissiles', await areaMissiles(data.id))
    })
    //when there is an attack clients in this area will get relevant missiles
    client.on("attack", async (data) => {
        io.to(data.area).emit("attack", await relevantInterceptors(data.bumName))
    })
    //when client shuting
    client.on("shuting", async (data) => {
        client.emit("attack", { interceptor: await relevantInterceptors(data.bumName), missilesLeft: await areaMissiles })
    })
    //after client shuting
    client.on("intercept", async (data) => {
          await wasIntercept(data.success)
    })

}