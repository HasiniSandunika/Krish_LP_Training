import { Pet } from './schemas/Pet.schema';
import { PetCreateDTO } from './dto/PetCreate.dto';
import { PetRepository } from './repository/Pet.repository';
export declare class PetsService {
    private petRepository;
    constructor(petRepository: PetRepository);
    getAllPets(): Promise<Pet[]>;
    createPet(petCreateDTO: PetCreateDTO): Promise<Pet>;
}
