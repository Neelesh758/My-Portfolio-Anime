import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true
    },
    link:{
      type:String,
      required:true
    },
    des1:{
      type:String,
      required:true
    },
    des2:{
      type:String,
      required:true
    },
    des3:{
      type:String,
      required:true
    },
    github:{
      type:String,
      required:true
    }
  },
  {timestamps:true}
)

const projectModel = mongoose.model('projects',projectSchema);
export default projectModel;