import mongoose from "mongoose";
import colors from "colors";

colors.enable();

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Connected successfully : ${connection.connection.host}`.bgGreen)
  } catch (error) {
    console.error(`Mongo Db Connection Error : ${error.message}`.bgRed.black.bold)
    process.exit(1)
  }
}

export default connectDb;