const express=require("express");
const User=require("../model/usermodel");

const router=express.Router();
router.post("",async(req,res)=>{
    const user=await User.create(req.body);
    return res.status(200).send(user)
})

module.exports=router