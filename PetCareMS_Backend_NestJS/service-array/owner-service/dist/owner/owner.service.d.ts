import { Owner } from './Owner.model';
import { OwnerCreateDTO } from './OwnerCreate.dto';
import { OwnerUpdateDTO } from './OwnerUpdate.dto';
import { OwnerSearchDTO } from './OwnerSearch.dto';
export declare class OwnerService {
    private owners;
    getAllOwners(): Owner[];
    createOwner(ownerCreateDTO: OwnerCreateDTO): {
        id: any;
        name: string;
        residence: string;
        contact: string;
        gender: string;
    };
    ownerSearch(ownerSerarchDTO: OwnerSearchDTO): Owner[];
    getOwnerByID(id: string): Owner;
    updateOwnerByID(ownerUpdateDTO: OwnerUpdateDTO): Owner;
    deleteOwnerByID(id: string): boolean;
}
