var express = require("express")
var app = express()
var http = require("http").createServer(app)
var io = require("socket.io")(http)

io.on("connection", (socket) => {

    socket.on("disconnect", () =>{
        console.log("X desconectou: " + socket.id)
    })

   socket.on("Olá,Mundo!", (data) => {
       console.log("Estou Funcionando!")
       console.log(data)
   })

   socket.on("palavra", (data) => {
       console.log(data)
       socket.emit("resultado", data + " - Carlos Bandelli!")
   })

})

app.set("view engine", "ejs")

app.get("/",(req, res)=>{
    res.render("index")
})

http.listen(3000,() => {
    console.log("APP RODANDO!")
})