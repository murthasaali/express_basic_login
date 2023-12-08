// console.log("running")
// function nefun(){

// return 10
// }
// console.log(   nefun())

// const interval=setInterval(() => {
//     console.log("run")
// }, 1000);

// setTimeout(() => {
//     console.log("run")
// }, 3000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 3000);


// console.log(___direname)


// const path =require("path")
// console.log(path)

// console.log(path.join(__dirname,"api","script.js"
// ))

// const fs=require('fs');
// const path=require('path');
// fs.readFile(path.join(__dirname,"/api2","api.text"),"utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// });


// const EventEmitter=require("events")


// const emitter =new EventEmitter()

// emitter.on("message",(data)=>{
//     console.log(data.text)
// })

// emitter.emit("message",{text:"userlogged"})

// const http=require("http")
// const fs = require("fs")
// const path = require("path")

// const server = http.createServer((req,res)=>{
//     fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
//         if(err) throw err
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end(data)
//     })
    
// })
// const PORT=process.env.PORT || 3001;


// server.listen(PORT,()=>console.log(`server running on ${PORT}`))


// const logger=require("./utils")

// console.log(logger())


// const app=express()


// app.use(express.static("views"))



// app.get("*",(req,res)=>{
//     res.status(404).send("<h1>404</h1>")
// })

// const PORT=process.env.PORT || 3001
 

// app.listen(PORT,()=>console.log(`server running ${PORT}`))
const express=require("express")
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("views"))

const emailDB="murthasa@mail.com"
const passwordDB="12345"
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name,password}=req.body
    if (name===emailDB&& password===passwordDB){
        res.send("Login succussfull")

    }else{
        res.send("login failed")
    }
})


const PORT=process.env.PORT || 3001
 

app.listen(PORT,()=>console.log(`server running ${PORT}`))