import { Owner } from './Owner.model';
import { OwnerService } from './owner.service';
import { OwnerCreateDTO } from './OwnerCreate.dto';
import { OwnerSearchDTO } from './OwnerSearch.dto';
import { OwnerUpdateDTO } from './OwnerUpdate.dto';
export declare class OwnerController {
    private ownerService;
    constructor(ownerService: OwnerService);
    getAllOwners(param: OwnerSearchDTO): Owner[];
    createOwner(ownerCreateDTO: OwnerCreateDTO): {
        id: any;
        name: string;
        residence: string;
        contact: string;
        gender: string;
    };
    getOwnerByID(id: string): Owner;
    updateOwnerByID(id: string, ownerUpdateDTO: OwnerUpdateDTO): Owner;
    deleteOwnerByID(id: string): void;
}
