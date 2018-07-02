import { Document } from 'mongoose';

export interface Donations extends Document {
    readonly "Project ID": string;
    readonly "Donation ID": string;
    readonly "Donor ID": string;
    readonly "Donation Included Optional Donation": string;
    readonly "Donation Amount": number;
    readonly "Donor Cart Sequence": number;
    readonly"Donation Received Date": Date
}
