import { Owner } from "./Owners.model";

export class OwnerImpl implements Owner{
    id: string;
    name: string;
    residence: string;
    contact: string;
    gender: string;

    constructor(id: string, name: string, residence: string, contact: string, gender: string){
        this.id=id;
        this.name=name;
        this.residence=residence;
        this.contact=contact;
        this.gender=gender;
    }
    
}