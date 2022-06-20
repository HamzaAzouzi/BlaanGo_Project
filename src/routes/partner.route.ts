import  express  from "express";
import { createPartner, getAllPartners, getOnePartner, updatePartner, deletePartner } from "@controllers/partner.controller";



const router = express.Router();

router.post('/add', createPartner);
router.get('/getAll', getAllPartners);
router.get('/get/:id', getOnePartner);
router.patch('/update/:id', updatePartner);
router.delete('/delete/:id', deletePartner);


export { router };



