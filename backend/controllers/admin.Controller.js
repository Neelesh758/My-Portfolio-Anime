import adminModel from "../models/admin/admin.Model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const RegisterAdmin = async (req,res,next) => {
  try {
    //Taking Admin Inputs
    const {userName , email , password} = req.body ;

    //Checking Admin inputs
    if(!userName || !email || !password){
      const error = new Error("Kindly Enter All Details");
      error.statusCode = 400;
      throw error;
    }

    //Checking Existing Admin

    const existingAdmin = await adminModel.findOne({email});

    if(existingAdmin){
      const error = new Error("Admin Exist,Kindly Login");
      error.statusCode = 400;
      throw error;
    }

    //Password Hashing
    const salt = await bcrypt.genSalt(10) //Salt Generation

    const hashedPassword = await bcrypt.hash(password,salt)

    //Saving Admin Details
    const newAdmin = new adminModel({
      userName,
      email,
      password:hashedPassword
    })

    await newAdmin.save()
    return res.status(201).send({
      success : true,
      message : "Admin Registered",
      admin : {
        id : newAdmin._id,
        userName:userName,
        email: email
      }
    })

  } catch (error) {
    console.error("Error Occured", error)
    // res.status(500).json(
    //   {
    //     success:false,
    //     message:error.message || "Internal Server Error"
    //   }
    // )
    next(error);
  }
}

export const LoginAdmin = async (req,res,next) => {
  try {
    //Taking Admin Inputs
    const {email , password} = req.body ;

    //Checking Admin inputs
    if(!email || !password){
      const error = new Error("Kindly Enter All Details");
      error.statusCode = 400;
      throw error;
    }

    //Find Admin

    const admin = await adminModel.findOne({email})

    //if user not found

    if(!admin){
      const error = new Error("Admin not found");
      error.statusCode = 404;
      throw error;
    }

    //Compare Password

    const isMatch = await bcrypt.compare(password,admin.password);
    if(!isMatch){
      const error  = new Error("Invalid Credentials");
      error.statusCode = 404;
      throw error;
    }
    //JWT  Sign

    const token = jwt.sign(
      {id:admin._id},
      process.env.JWT_SECRET,
      {expiresIn:"2d"}
    )

    //svae token as cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 2 * 24 * 60 * 60 * 1000
    });
    // Succes
    res.status(200).json({
      success: true,
      message: "Admin Login Successful",
      token,
      admin: {
        id: admin._id,
        userName: admin.userName,
      }
    });


  }catch (error) {
    console.log("error Occured",error)
    next(error)
  }
}

export const  LogoutController = async (req,res,next) => {
  try {
    res.clearCookie("token",{
      httpOnly:true,
      secure:false,
      sameSite:"lax"
    });
    return res.status(200).json({
      success:true,
      message:"Logout Successful"
    })
  } catch (error) {
    next(error);
  }
}