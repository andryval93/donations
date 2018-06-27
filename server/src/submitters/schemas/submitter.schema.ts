import * as mongoose from 'mongoose';
export const SubmitterSchema = new mongoose.Schema({
    icon: String,
    type: String,
    name: String,
    description: String,
    lastEdit: String
});
