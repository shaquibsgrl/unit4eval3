const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
like:{type:Number,required:true},
userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
publicationId:{type:mongoose.Schema.Types.ObjectId,ref:"publication",required:true},
coverImage:{type:String,required:true},
content:{type:String,required:true},


},
{
    versionKey:false,
    timestamps:true
});

const Book=mongoose.model("book",bookSchema);

module.exports=Book