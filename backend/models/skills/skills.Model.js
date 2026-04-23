import mongoose, { Mongoose } from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    skillName : {
      type : String,
      required: true,
      unique : true
    },
    category : {
      type : String,
      required: true
    },
    img : {
      type : String,
      required: true
    }
  },
  {timestamps:true}
);

const skillModel = mongoose.model('skills',skillSchema);

export default skillModel;