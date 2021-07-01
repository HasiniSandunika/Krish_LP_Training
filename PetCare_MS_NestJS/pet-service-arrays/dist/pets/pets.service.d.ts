import { Pet } from './Pet.model';
import { PetSearchDTO } from './PetSearch.dto';
import { PetUpdateDTO } from './PetUpdate.dto';
import { PetCreateDTO } from './PetCreate.dto';
export declare class PetsService {
    private pets;
    getAllPets(): Pet[];
    createPet(petCreateDTO: PetCreateDTO): {
        id: any;
        name: string;
        type: string;
        gender: string;
        age: string;
    };
    petSearch(petSerarchDTO: PetSearchDTO): Pet[];
    getPetByID(id: string): Pet;
    updatePetByID(petUpdateDTO: PetUpdateDTO): Pet;
    deletePetByID(id: string): boolean;
}
