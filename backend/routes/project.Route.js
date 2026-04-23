import express from 'express';
import upload from '../middlewares/upload.Middleware.js';
import { addProject, getProject } from '../controllers/project.Controller.js';

const router = express.Router();

router.post('/addproject',upload.single('img'),addProject);
router.get('/getproject',getProject);

export default router;
