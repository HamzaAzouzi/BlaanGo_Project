import { Schema, model, ObjectId } from 'mongoose';



// 1. Create an interface representing a document in MongoDB.

export interface Plan {
    nom: string,
    image: any,
    description: string,
    Partners: ObjectId,
}


// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Plan>(
    {
        nom: { type: String, required: true },
        image: { type: Array, required: false },
        description: { type: String, required: true },
        Partners: [{ type: Schema.Types.ObjectId, ref: 'Partner' }],

    },
    { timestamps: true }
);

export const Plan = model<Plan>('Plan', schema);