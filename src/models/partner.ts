import { Schema, model, ObjectId } from 'mongoose';


// 1. Create an interface representing a document in MongoDB.
export interface Partner {
    nom: string,
    description: string,
    images: any,
    PartnersCategory: ObjectId,
    menu: Array<ObjectId>,
}


// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Partner>(
    {
        nom: { type: String, required: true },
        description: { type: String, required: true },
        images: { type: Array, required: false },
        PartnersCategory: { type: Schema.Types.ObjectId, ref: 'PartnersCategory' },
        menu: [{ type: Schema.Types.ObjectId, ref: 'Menu', required: false }],
    },
    { timestamps: true }
);


// 3. Create a Model.
export const Partner = model<Partner>('Partner', schema);



