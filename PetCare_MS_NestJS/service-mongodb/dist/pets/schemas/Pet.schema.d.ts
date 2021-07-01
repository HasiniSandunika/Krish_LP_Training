import { Document } from "mongoose";
export declare type PetDocumet = Pet & Document;
export declare class Pet {
    id: string;
    name: string;
    type: string;
    gender: string;
    age: string;
}
export declare const PetSchema: import("mongoose").Schema<Document<Pet, any>, import("mongoose").Model<any, any, any>, undefined, any>;
