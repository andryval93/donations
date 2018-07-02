import { Document } from 'mongoose';

export interface Donors extends Document {
    readonly "Donor ID": string;
    readonly"Donor City": string;
    readonly "Donor State": string;
    readonly "Donor Is Teacher": string;
    readonly "Donor Zip": number;
}


