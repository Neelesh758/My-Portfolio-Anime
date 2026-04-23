import experienceModel from "../models/Experience/experience.Model.js"

export const addExp = async (req,res,next) => {
  try {

    const {jobTitle,company,description,start,end,category} = req.body

    if(!jobTitle || !company || !description || !start || !end || !category){
      const error = new Error("Kindly Enter All Details ")
      error.statusCode = 400
      throw error
    }

    const newExp = new experienceModel({
      jobTitle,
      company,
      description,
      start,
      end,
      category
    })

    await newExp.save()
    return res.status(201).send({
      success : true,
      message : "Exp Added Successfully",
      newExp
    })
  } catch (error) {
    next(error)
  }
}

export const getExp = async (req,res,next) => {
  try {
    const data = await experienceModel.find().sort({createdAt : -1});

    return res.status(200).json({
      success:true,
      message:"Data Fetched Successfully",
      experience:data
    })
  } catch (error) {
    next(error)
  }
}

export const editExp = async (req,res,next) => {
  try {
    const {id} = req.params;
    const {jobTitle,company,description,start,end,category} = req.body

    if(!jobTitle || !company || !description || !start || !end || !category){
      const error = new Error("Kindly Enter All Details");
      error.statusCode = 400;
      throw error
    }

    const updateExp = await experienceModel.findByIdAndUpdate(id,
      {
        jobTitle,
        company,
        description,
        start,
        end,
        category
      },
      {new:true}
    )

    if(!updateExp){
      const error = new Error("Invalid Selection");
      error.statusCode = 400;
      throw error
    }

    return res.status(200).json({
      success:true,
      message:"Updated Successfully",
      updateExp
    })
  } catch (error) {
    next(error);
  }
}

export const deleteExp = async (req,res,next) => {
  try {
    const {id} = req.params;

    const deletedExp = await experienceModel.findByIdAndDelete(id);
    if(!deletedExp){
      const error = new Error("Invalid Selection");
      error.statusCode = 400;
      throw error;
    }

    return res.status(200).json({
      success:true,
      message:"Deleted Succesfully"
    })
  } catch (error) {
    next(error)
  }
}