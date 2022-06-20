import express from 'express';
import { addCategorie,getAllCategories,updateCategorie,deleteCategorie } from '@controllers/categorie.controller';

const router = express.Router();

router.post('/add', addCategorie);
router.get('/getAll', getAllCategories);
router.patch('/update/:id', updateCategorie);
router.delete('/delete/:id', deleteCategorie);

export { router };
