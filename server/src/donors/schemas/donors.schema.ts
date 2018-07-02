import * as mongoose from 'mongoose';
export const DonatoriSchema = new mongoose.Schema({
    "Donor ID": String,
    "Donor City": String,
    "Donor State": String,
    "Donor Is Teacher": String,
    "Donor Zip": Number
});