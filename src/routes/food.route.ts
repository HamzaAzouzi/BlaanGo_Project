import express from 'express';
import { addFood, updateFood, deleteFood, getFoodById, getAllFoods } from '@controllers/food.controller';

// const multer = require('multer');


const router = express.Router();

router.post('/add', addFood);
router.get('/getAll', getAllFoods);
router.get('/get/:id', getFoodById);
router.patch('/update/:id', updateFood);
router.delete('/delete/:id', deleteFood);

export { router };

