import { PetCreateDTO } from './dto/PetCreate.dto';
import { PetsService } from './service/pets.service';
import { PetSearchDTO } from './dto/PetSearch.dto';
import { Pet } from './schemas/Pet.schema';
export declare class PetsController {
    private petsService;
    constructor(petsService: PetsService);
    getAllPets(param: PetSearchDTO): Promise<Pet[]>;
    createPet(petCreateDTO: PetCreateDTO): Promise<Pet>;
}
