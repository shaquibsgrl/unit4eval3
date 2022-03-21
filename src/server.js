const app=require("./index");

const connect=require("./configs/db")

app.listen(6100,async()=>{

    await connect()
console.log("listening on port 6100")

})