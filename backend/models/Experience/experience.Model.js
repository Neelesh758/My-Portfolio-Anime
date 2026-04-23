import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    jobTitle:{
      type:String,
      required:true
    },
    company:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    start:{
      type:String,
      required:true
    },
    end:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
  },
  {timestamps:true}
)

const experienceModel = mongoose.model('experiences',experienceSchema);
export default experienceModel;