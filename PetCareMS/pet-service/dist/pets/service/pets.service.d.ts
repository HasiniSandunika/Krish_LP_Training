import { Pet } from '../schemas/Pet.schema';
import { PetSearchDTO } from '../dto/PetSearch.dto';
import { PetUpdateDTO } from '../dto/PetUpdate.dto';
import { PetCreateDTO } from '../dto/PetCreate.dto';
import { PetRepository } from '../repository/Pet.repository';
export declare class PetsService {
    private petRepository;
    constructor(petRepository: PetRepository);
    getAllPets(): Promise<Pet[]>;
    createPet(petCreateDTO: PetCreateDTO): Promise<Pet>;
    petSearch(petSearchDto: PetSearchDTO): Promise<import("../schemas/Pet.schema").PetDocumet[]>;
    getPetById(id: string): Promise<Pet>;
    updatePetById(petUpdateDTO: PetUpdateDTO): Promise<Pet>;
    deletePetById(id: string): Promise<boolean>;
}
