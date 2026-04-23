import express from 'express';
import { addExp, deleteExp, editExp, getExp } from '../controllers/experience.Controller.js';

const router = express.Router()

router.post('/addexp',addExp);
router.get('/getexp',getExp);
router.put('/editexp/:id',editExp);
router.delete('/deleteexp/:id',deleteExp);

export default router