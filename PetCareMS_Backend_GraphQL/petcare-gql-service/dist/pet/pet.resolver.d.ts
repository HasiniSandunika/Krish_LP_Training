import { Owner } from 'src/owner/entities/owner.entity';
import { CreatePetDTO } from './dto/create-pet.input';
import { UpdatePetDTO } from './dto/update-pet.input';
import { Pet } from './entries/pet.entity';
import { PetService } from './pet.service';
export declare class PetResolver {
    private petService;
    constructor(petService: PetService);
    findAll(): Promise<Pet[]>;
    create(createPetDTO: CreatePetDTO): Promise<Pet>;
    findOne(id: string): Promise<Pet>;
    updateOwner(updatePetDTO: UpdatePetDTO): Promise<Pet>;
    removeOwner(id: string): Promise<Pet>;
    owner(pet: Pet): Promise<Owner>;
}
