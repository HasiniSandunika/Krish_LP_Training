import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetDTO } from './dto/create-pet.input';
import { UpdatePetDTO } from './dto/update-pet.input';
import { Pet } from './entries/pet.entity';
export declare class PetService {
    private petRepository;
    private ownerService;
    constructor(petRepository: Repository<Pet>, ownerService: OwnerService);
    findAll(): Promise<Pet[]>;
    create(createpetDTO: CreatePetDTO): Promise<Pet>;
    findOne(id: string): Promise<Pet>;
    update(id: string, updatePetDTO: UpdatePetDTO): Promise<Pet>;
    remove(id: string): Promise<Pet>;
    getOwner(id: string): Promise<Owner>;
}
