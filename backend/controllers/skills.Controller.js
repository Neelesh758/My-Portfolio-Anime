import cloudinary from "../config/cloudinary.js";
import skillModel from "../models/skills/skills.Model.js";

export const  addSkillController = async (req,res,next) => {
  try {
    //Taking Inputs from Admin
    const {skillName , category} = req.body;
    //Checking Inputrs
    if(!skillName || !req.file || !category){
      const error = new Error("Kindly Enter All Details");
      error.statusCode = 400;
      throw error;
    }

    //upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path,{
      folder : "skills",
    });
    //Saving Skills
    const newSkill = new skillModel({
      skillName,
      img : result.secure_url,
      category
    });

    await newSkill.save()
    return res.status(201).send({
      success : true,
      message : "Skill Saved",
      skill : newSkill
    })

  } catch (error) {
    console.error(error)
    next(error)
  }
}


//Get Skill

export const getSkill = async (req,res,next) => {
  try {
    const skill = await skillModel.find().sort({createdAT : -1});

    return res.status(200).json({
      success:true,
      count : skill.length,
      skills : skill
    })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

