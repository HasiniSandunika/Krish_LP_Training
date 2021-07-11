import { Model } from "mongoose";
import { OwnerCreateDTO } from "../dto/OwnerCreate.dto";
import { OwnerSearchDTO } from "../dto/OwnerSearch.dto";
import { OwnerUpdateDTO } from "../dto/OwnerUpdate.dto";
import { Owner, OwnerDocumet } from "../schemas/Owner.schema";
export declare class OwnerRepository {
    private ownerModel;
    constructor(ownerModel: Model<OwnerDocumet>);
    create(ownerCreateDTO: OwnerCreateDTO): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    ownerSearch(ownerSearchDTO: OwnerSearchDTO): Promise<OwnerDocumet[]>;
    update(ownerUpdateDTO: OwnerUpdateDTO): Promise<Owner>;
    delete(id: string): Promise<boolean>;
}
