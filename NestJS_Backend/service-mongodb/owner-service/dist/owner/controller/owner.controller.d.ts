import { Owner } from '../schemas/Owner.schema';
import { OwnerService } from '../service/owner.service';
import { OwnerCreateDTO } from '../dto/OwnerCreate.dto';
import { OwnerSearchDTO } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDTO } from '../dto/OwnerUpdate.dto';
export declare class OwnerController {
    private ownerService;
    constructor(ownerService: OwnerService);
    getAllOwners(param: OwnerSearchDTO): Promise<Owner[]>;
    createOwner(ownerCreateDTO: OwnerCreateDTO): Promise<Owner>;
    getOwnerById(id: string): Promise<Owner>;
    updateOwnerByID(id: string, ownerUpdateDTO: OwnerUpdateDTO): Promise<Owner>;
    deleteOwnerByID(id: string): Promise<void>;
}
