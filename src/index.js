const express=require("express");



const app=express();

app.use(express.json());

const usercontroller=require("./controller/user.controller");
const bookcontroller=require("./controller/bookcontroller");
const commentcontroller=require("./controller/cooment.controoler")


app.use("/user",usercontroller);
app.use("/book",bookcontroller);
app.use("/comment",commentcontroller);

module.exports=app