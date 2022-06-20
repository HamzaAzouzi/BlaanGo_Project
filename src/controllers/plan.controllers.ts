import { RequestHandler } from "express";
import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';


import { Plan } from '../models/Plan';
import { upload } from '../lib/upload';
import mongoose from "mongoose";

// create Plan
const addPlan = async (req: Request, res: Response) => {
    try {
         
        await Plan.create({ ...req.body, image: url });
        res.send({ message: "Plan was register successfully!" });
    } catch (error: any) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}



// get all Plans
const getAllPlans = catchAsync(async (req: Request, res: Response) => {
    try {
        const plans = await Plan.find();
        res.status(200).json({
            plans,
        });
    }
    catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}
);

// get one Plan
const getOnePlan = catchAsync(async (req: Request, res: Response) => {
    try {
        const plans = await Plan.findById(req.params.id);
        res.status(200).json({
            plans,
        });
    }
    catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}
);
// update Plan
const updatePlan = catchAsync(async (req: Request, res: Response) => {
    try {
        await Plan.findByIdAndUpdate(req.params.id, { ...req.body });
        res.send({ message: "Plan was update successfully!" });
    }
    catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
});



// delete Plan
const deletePlan = async (req: Request, res: Response) => {
    try {
        const plan: any = await Plan.findByIdAndDelete(req.params.id);
        res.status(200).json({
            plan,
        });
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}


export { addPlan, getAllPlans, getOnePlan, updatePlan, deletePlan };
