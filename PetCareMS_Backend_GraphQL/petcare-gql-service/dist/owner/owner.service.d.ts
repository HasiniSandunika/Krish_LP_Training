import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
export declare class OwnerService {
    private ownerRepository;
    constructor(ownerRepository: Repository<Owner>);
    create(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    update(id: string, updateOwnerInput: UpdateOwnerInput): Promise<Owner>;
    remove(id: string): Promise<Owner>;
}
