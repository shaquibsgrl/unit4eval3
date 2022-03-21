const express=require("express");
const Book=require("../model/bookmodel");

const router=express.Router();
router.post("",async(req,res)=>{
    const book=await Book.create(req.body);
    return res.status(200).send(book)
})

module.exports=router