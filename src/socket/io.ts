import { Socket } from "socket.io";
import { io } from "../app";

export const handelSocketConnection = (client:Socket) => {
    client.on('intercept',()=>console.log("intercept from client"))
    io.emit("newAttack","data")
}