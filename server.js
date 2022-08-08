const express = require('express')
const app = express()

app.set("view engine","ejs")

// Use the command: 'taskkill /F /IM node.exe' to kill the node when a process is not working or you cannot change the route

/*app.get("/",logger,(req,res)=>{
    console.log("Here")
    //res.sendStatus(500)
    //res.download("server.js")
    //res.send("Hi")
    res.render("index",{ text:'World' })
})*/
app.use(express.static("public"))
const userRouter = require('./routes/users')

app.use('/users',userRouter)
/*function logger(req,res,next)
{
    console.log(req.originalUrl)
    next()
}*/

app.listen(3000)