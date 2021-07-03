import { Document } from "mongoose";
export declare type OwnerDocumet = Owner & Document;
export declare class Owner {
    id: string;
    name: string;
    residence: string;
    contact: string;
    gender: string;
}
export declare const OwnerSchema: import("mongoose").Schema<Document<Owner, any>, import("mongoose").Model<any, any, any>, undefined, any>;
