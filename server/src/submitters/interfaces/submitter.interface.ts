import { Document } from 'mongoose';

export interface Submitter extends Document {
    readonly icon: string;
    readonly type: string;
    readonly name: string;
    readonly description: string;
    readonly lastEdit: string;
}
