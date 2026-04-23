import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next)=>{
  const token = req.cookies.token;

  //checking is token or not
  if(!token){
    return res.status(401).json({
      success:false,
      message:"Unauthorized , Please Login"
    })
  }
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.adminid = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      success:false,
      message:"Session Expired"
    })
  }
}

export default authMiddleware;