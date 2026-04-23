import cloudinary from "../config/cloudinary.js";
import projectModel from "../models/projects/project.Model.js";

export const addProject = async (req,res,next) => {
  try {
    //Taking text inputs
    const {title,link,des1,des2,des3,github} = req.body;
    if(!title || !des1 || !des2 || !des3 || !req.file || !link || !github){
      const error = new Error("Kindly Enter all Details");
      error.statusCode = 400;
      throw error;
    }

    //uploading img

    const result = await cloudinary.uploader.upload(req.file.path,{
      folder:"projects"
    });

    //saving details 
    const newProject = new projectModel({
      title,
      link,
      des1,
      des2,
      des3,
      github,
      img:result.secure_url
    })
    await newProject.save()

    return res.status(200).json({
      success: true,
      message: "Project Added Successfully",
      newProject
    })
  } catch (error) {
    next(error);
  }
};


export const getProject = async (req,res,next) => {
  try {
    const data = await projectModel.find().sort({createdAt:-1});
    return res.status(201).json({
      success:true,
      message: "Project Fetched Successfully",
      data
    })
  } catch (error) {
    next(error)
  }
}