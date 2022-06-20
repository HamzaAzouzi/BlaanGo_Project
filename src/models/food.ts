import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export interface Food {

    nom: string,
    prix:number,
    description: string,
    images: any,
}

// 2. Create a Schema corresponding to the document interface.

const schema = new Schema<Food>(
    {
        nom: { type: String, required: true },
        prix: { type: Number, required: true },
        description: { type: String, required: true },
        images: { type: Array, required: false },
    },
    { timestamps: true }
);

// 3. Create a Model.
export const Food = model<Food>('Food', schema);
