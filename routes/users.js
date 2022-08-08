const express = require('express')
const router = express.Router()

router.use(logger)
router.get("/",(req,res)=>{
    console.log(req.query.name)
    res.send("User Form")
})

router.get("/new",(req,res)=>{
    res.send("User New Form")
})

router.post("/",(req,res)=>{
    res.send("Create User")
})

router.get("/:id",(req,res)=>{
    res.send(`Get User with ID ${req.params.id}`)
})

router.put("/:id",(req,res)=>{
    res.send(`Get User with ID ${req.params.id}`)
})

router.delete("/:id",(req,res)=>{
    res.send(`Get User with ID ${req.params.id}`)
})

function logger(req,res,next)
{
    console.log(req.originalUrl)
    next()
}

module.exports = router