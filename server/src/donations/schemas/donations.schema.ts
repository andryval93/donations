import * as mongoose from 'mongoose';
export const DonazioniSchema = new mongoose.Schema({
    "Project ID": String,
    "Donation ID": String,
    "Donor ID": String,
    "Donation Included Optional Donation": String,
    "Donation Amount": Number,
    "Donor Cart Sequence": Number,
    "Donation Received Date": Date
}, { collection: 'Donazioni' });
