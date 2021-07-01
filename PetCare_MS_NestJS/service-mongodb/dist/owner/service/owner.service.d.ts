import { Owner } from '../schemas/Owner.schema';
import { OwnerCreateDTO } from '../dto/OwnerCreate.dto';
import { OwnerUpdateDTO } from '../dto/OwnerUpdate.dto';
import { OwnerSearchDTO } from '../dto/OwnerSearch.dto';
import { OwnerRepository } from '../repository/Owner.repository';
export declare class OwnerService {
    private ownerRepository;
    constructor(ownerRepository: OwnerRepository);
    getAllOwners(): Promise<Owner[]>;
    createOwner(ownerCreateDTO: OwnerCreateDTO): Promise<Owner>;
    ownerSearch(ownerSearchDTO: OwnerSearchDTO): Promise<import("../schemas/Owner.schema").OwnerDocumet[]>;
    getOwnerById(id: string): Promise<Owner>;
    updateOwnerById(ownerUpdateDTO: OwnerUpdateDTO): Promise<Owner>;
    deleteOwnerById(id: string): Promise<boolean>;
}
