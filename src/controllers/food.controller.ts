import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { Food } from '@models/food';


//create Food   
const addFood = async (req: Request, res: Response) => {
    try {
        await Food.create(req.body);
        res.send({ message: "Food was register successfully!" });
    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }

}

//get all Food
const getAllFoods = catchAsync(async (req: Request, res: Response) => {

    try {

        const food = await Food.find();

        res.status(200).json({
            food,
        });

    } catch (err) {
        return res.status(400).json({
            status: false,
            message: ""
        })
    }
}
)

//get Food by id
const getFoodById = catchAsync(async (req: Request, res: Response) => {
    try {
        const food = await Food.findById(req.params.id);
        res.status(200).json({
            food,
        });
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: ""
        })
    }
}

)

//update Food
const updateFood = catchAsync(async (req: Request, res: Response) => {
    try {
        await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({ message: "Partner was update successfully!" });
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: ""
        })
    }
}

)

//delete Food
const deleteFood = catchAsync(async (req: Request, res: Response) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.send({ message: "Partner was deleted successfully!" });

    } catch (err) {
        return res.status(400).json({
            status: false,
            message: ""
        })
    }
})

export { addFood, getFoodById, updateFood, deleteFood, getAllFoods };