import { Pet } from './Pet.model';
import { PetCreateDTO } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDTO } from './PetSearch.dto';
import { PetUpdateDTO } from './PetUpdate.dto';
export declare class PetsController {
    private petsService;
    constructor(petsService: PetsService);
    getAllPets(param: PetSearchDTO): Pet[];
    createPet(petCreateDTO: PetCreateDTO): {
        id: any;
        name: string;
        type: string;
        gender: string;
        age: string;
    };
    getPetByID(id: string): Pet;
    updatePetByID(id: string, petUpdateDTO: PetUpdateDTO): Pet;
    deletePetByID(id: string): void;
}
