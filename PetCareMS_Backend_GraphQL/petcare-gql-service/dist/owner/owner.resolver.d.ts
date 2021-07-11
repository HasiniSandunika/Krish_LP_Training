import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
export declare class OwnerResolver {
    private ownerService;
    constructor(ownerService: OwnerService);
    create(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    updateOwner(updateOwnerInput: UpdateOwnerInput): Promise<Owner>;
    removeOwner(id: string): Promise<Owner>;
}
