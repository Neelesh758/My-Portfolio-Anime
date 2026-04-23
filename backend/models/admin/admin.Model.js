import mongoose, { mongo } from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    userName :{
      type:String,
      unique:true,
      required:true
    },
    email : {
      type:String,
      unique:true,
      required:true
    },
    password : {
      type:String,
      required:true
    }
  },
  {timestamps:true}
);

const adminModel = mongoose.model('admins',adminSchema);

export default adminModel;