import { Model } from "mongoose";
import { PetCreateDTO } from "./dto/PetCreate.dto";
import { Pet, PetDocumet } from "./schemas/Pet.schema";
export declare class PetRepository {
    private petModel;
    constructor(petModel: Model<PetDocumet>);
    create(petCreateDTO: PetCreateDTO): Promise<Pet>;
    findAll(): Promise<Pet[]>;
}
