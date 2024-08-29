import express from "express"
import http from 'http'
import ejs from "ejs"
import path from 'path'
import { Server } from "socket.io"



const app = express()
const port = 9001
const server = http.createServer(app)
const io = new Server(server)



app.set("view engine","ejs");
app.set('views',path.resolve("./views"))




app.get('/',(req,res)=>{
    res.render('form.ejs')
})

io.on('connection',(socket)=>{socket.on('message',(message)=>{
    console.log("message:",message)
    io.emit('message',message)
})
})


server.listen(port,()=>{
    console.log("Server running at PORT : ",port)
})