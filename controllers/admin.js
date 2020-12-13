const express=require('express')
const adminRouter=express.Router()
const authenticate=require('../helper/author')


adminRouter.post('/login',(req,res) =>{
    const {username,password}=req.body
    const token= authenticate.generateAccessToken
    res.status(200).send({"message":"Login successful","token":"token"})
})


adminRouter.post('/logout',(req,res) =>{

})

module.exports=adminRouter;