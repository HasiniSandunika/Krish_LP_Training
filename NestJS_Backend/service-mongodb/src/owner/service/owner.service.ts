import { Injectable } from '@nestjs/common';
import { Owner } from '../schemas/Owner.schema';
import { OwnerCreateDTO } from '../dto/OwnerCreate.dto';
import { OwnerUpdateDTO } from '../dto/OwnerUpdate.dto';
import { OwnerSearchDTO } from '../dto/OwnerSearch.dto';
import { OwnerRepository } from '../repository/Owner.repository';

@Injectable()
export class OwnerService {

    constructor(private ownerRepository: OwnerRepository){
    }

    async getAllOwners(): Promise<Owner[]>{
        return await this.ownerRepository.findAll();
    }

    async createOwner(ownerCreateDTO: OwnerCreateDTO): Promise<Owner>{
        return await this.ownerRepository.create(ownerCreateDTO);
    }

    async ownerSearch(ownerSearchDTO: OwnerSearchDTO) {
        return await this.ownerRepository.ownerSearch(ownerSearchDTO);
    }

    async getOwnerById(id: string): Promise<Owner> {
        return await this.ownerRepository.findOne(id)       
    }

    async updateOwnerById(ownerUpdateDTO: OwnerUpdateDTO): Promise<Owner> {
        return await this.ownerRepository.update(ownerUpdateDTO);
    }

    async deleteOwnerById(id: string): Promise<boolean> {
        return await this.ownerRepository.delete(id);
    }
    
}
