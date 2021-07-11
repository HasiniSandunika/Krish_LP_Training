import { Pet } from "./Pets.model";

export class PetImpl implements Pet{
    
    id: string;
    name: string;
    type: string;
    gender: string;
    age: string;

    constructor(id: string, name: string, type: string, gender: string, age: string){
        this.id=id;
        this.name=name;
        this.type=type;
        this.gender=gender;
        this.age=age;
    }
    
}