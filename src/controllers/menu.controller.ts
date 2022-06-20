import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import { Partner } from '@models/partner';
import { Menu } from '@models/Menu';




// create Menu 
const createMenu = async (req: Request, res: Response) => {
    try {
        await Menu.create(req.body);
        res.send({ message: "Menu was register successfully!" });
    } catch (error: any) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}


// get all Menus
const getAllMenus = async (req: Request, res: Response) => {
    try {
        const menus = await Menu.find({});
        res.send(menus);
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// get one Menu 
const getOneMenu = async (req: Request, res: Response) => {
    try {
        const menu = await Menu.findById(req.params.id);
        res.send(menu);
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// update menu 
const updateMenu = async (req: Request, res: Response) => {
    try {
        await Menu.findByIdAndUpdate(req.params.id, { ...req.body });
        res.send({ message: "Menu was update successfully!" });
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// delete menu 
const deleteMenu = async (req: Request, res: Response) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.send({ message: "Menu was delete successfully!" });
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

export { createMenu, getAllMenus, getOneMenu, updateMenu, deleteMenu };