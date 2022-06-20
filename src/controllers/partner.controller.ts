import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import { Partner } from '@models/partner';





// create Partner
const createPartner = async (req: Request, res: Response) => {
    try {
        await Partner.create(req.body);
        res.send({ message: "Partner was register successfully!" });
    } catch (error: any) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}


// get all Partners


const getAllPartners = async (req: Request, res: Response) => {
    try {
        const partners = await Partner.find({});
        res.send(partners);
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// get one Partner
const getOnePartner = async (req: Request, res: Response) => {
    try {
        const partner = await Partner.findById(req.params.id);
        res.send(partner);
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}


// update Partner
const updatePartner = async (req: Request, res: Response) => {
    try {

        await Partner.findByIdAndUpdate(req.params.id, { ...req.body });
        res.send({ message: "Partner was update successfully!" });
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// delete Partner
const deletePartner = async (req: Request, res: Response) => {
    try {
        await Partner.findByIdAndDelete(req.params.id);
        res.send({ message: "Partner was deleted successfully!" });
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

export { createPartner, getAllPartners, getOnePartner, updatePartner, deletePartner };


