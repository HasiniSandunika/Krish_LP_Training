import { Model } from "mongoose";
import { PetCreateDTO } from "../dto/PetCreate.dto";
import { PetSearchDTO } from "../dto/PetSearch.dto";
import { PetUpdateDTO } from "../dto/PetUpdate.dto";
import { Pet, PetDocumet } from "../schemas/Pet.schema";
export declare class PetRepository {
    private petModel;
    constructor(petModel: Model<PetDocumet>);
    create(petCreateDTO: PetCreateDTO): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: string): Promise<Pet>;
    petSearch(petSearchDTO: PetSearchDTO): Promise<PetDocumet[]>;
    update(petUpdateDTO: PetUpdateDTO): Promise<Pet>;
    delete(id: string): Promise<boolean>;
}
