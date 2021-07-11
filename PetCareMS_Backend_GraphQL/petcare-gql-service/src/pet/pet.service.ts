import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetDTO } from './dto/create-pet.input';
import { UpdatePetDTO } from './dto/update-pet.input';
import { Pet } from './entries/pet.entity';

@Injectable()
export class PetService {

    constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>,
    private ownerService: OwnerService){
    }

    async findAll(): Promise<Pet[]>{
        return await this.petRepository.find();
    }

    async create(createpetDTO: CreatePetDTO): Promise<Pet>{
        let pet=this.petRepository.create(createpetDTO);
        return await this.petRepository.save(pet);
    }

    async findOne(id: string) : Promise<Pet>{
        let pet= await this.petRepository.findOne(id);
        if(pet){
            return pet;
        }
        throw new NotFoundException(`Pet record cannot find by id ${id}`);
    }
    
    async update(id: string, updatePetDTO: UpdatePetDTO) {
        let pet: Pet = await this.petRepository.create(updatePetDTO)
        pet.id = id;
        return await this.petRepository.save(pet); 
    }
    
    async remove(id: string) {
        let pet = await this.findOne(id);
        if (pet) {
          let ret = await this.petRepository.delete(id);
          if (ret.affected === 1) {
            return pet;
          }
        }
        throw new NotFoundException(`Pet record cannot find by id ${id}`);
    }

    async getOwner(id: string): Promise<Owner>{
        return await this.ownerService.findOne(id);
    }

}
