import express from 'express';
import { addSkillController, getSkill } from '../controllers/skills.Controller.js';
import upload from '../middlewares/upload.Middleware.js';

const router = express.Router();

router.post('/addskill',upload.single('img'),addSkillController);
router.get('/getskill',getSkill);

export default router;