const express = require("express")
const app=express();
const http = require("http")
const cors = require("cors")
const {Server} = require("socket.io")

app.use(cors());

const server = http.createServer(app); //using express object 
const io=new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods:["GET","POST"]
    }
})


io.on("connection",(socket)=>{
    console.log(`User Connected : ${socket.id}`)

     //join the room which is sent by user from UI
socket.on("join_room",(data)=>{
    socket.join(data)
  console.log(`User with ID${socket.id} joined ${data}`)
})

socket.on("send_message",(message_meta)=>{
    socket.to(message_meta.room).emit("receive_message",message_meta)
    console.log(message_meta)
})


    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id )
    })

})


server.listen(3001,()=>{
    console.log("Server Running")
})