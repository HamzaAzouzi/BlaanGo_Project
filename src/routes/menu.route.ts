import express from 'express';
import { createMenu,deleteMenu,getAllMenus,getOneMenu,updateMenu } from '@controllers/menu.controller';

const router = express.Router();


router.post('/add', createMenu);
router.delete('/delete/:id', deleteMenu);
router.get('/getAll', getAllMenus);
router.get('/get/:id', getOneMenu);
router.patch('/update/:id', updateMenu);




export { router };

