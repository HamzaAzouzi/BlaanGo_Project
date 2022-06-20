import { Schema, model, ObjectId } from 'mongoose';


// 1. Create an interface representing a document in MongoDB.
export interface IMenu {
    nom: string,
    description: string,
    foods: Array<ObjectId>,
}


// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IMenu>(
    {
        nom: { type: String, required: true },
        description: { type: String, required: true },
        foods: [{ type: Schema.Types.ObjectId, ref: 'Food', required: false }],
    },
    { timestamps: true }
);


// 3. Create a Model.
export const Menu = model<IMenu>('Menu', schema);



