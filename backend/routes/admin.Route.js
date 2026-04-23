import express from "express";
import { LoginAdmin, LogoutController, RegisterAdmin } from "../controllers/admin.Controller.js";
import authMiddleware from "../middlewares/auth.Middleware.js";

const router = express.Router();

router.post('/register',RegisterAdmin);
router.post('/login',LoginAdmin);
router.post('/logout',LogoutController)
router.get('/me',authMiddleware,(req,res)=>{
  res.status(200).json({
    success: true,
    message: "Authorized"
  })
})

export default router;