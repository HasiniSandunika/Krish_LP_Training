import { Owner } from "src/owner/entities/owner.entity";
export declare class Pet {
    id: string;
    name: string;
    type: string;
    gender: string;
    age: string;
    owner: Owner;
    ownerId: string;
}
