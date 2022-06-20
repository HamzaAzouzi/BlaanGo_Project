import express from 'express';
import { addPlan, deletePlan, getAllPlans, getOnePlan, updatePlan } from '@controllers/plan.controllers';
import { handlFile } from '@config/media';

const router = express.Router();

router.post('/add', handlFile.fields([{ name: "image", maxCount: 1 }]), addPlan);
router.get('/getAll', getAllPlans);
router.get('/get/:id', getOnePlan);
router.patch('/update/:id', updatePlan);
router.delete('/delete/:id', deletePlan);

export { router };