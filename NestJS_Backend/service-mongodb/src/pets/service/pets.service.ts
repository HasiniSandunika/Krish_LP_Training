import { Injectable } from '@nestjs/common';
import { Pet } from '../schemas/Pet.schema';
import { PetSearchDTO } from '../dto/PetSearch.dto';
import { PetUpdateDTO } from '../dto/PetUpdate.dto';
import { PetCreateDTO } from '../dto/PetCreate.dto';
import { PetRepository } from '../repository/Pet.repository';

@Injectable()
export class PetsService {

    constructor(private petRepository: PetRepository){
    }

    async getAllPets(): Promise<Pet[]>{
        return await this.petRepository.findAll();
    }

    async createPet(petCreateDTO: PetCreateDTO): Promise<Pet>{
        return await this.petRepository.create(petCreateDTO);
    }

    async petSearch(petSearchDto: PetSearchDTO) {
        return await this.petRepository.petSearch(petSearchDto);
    }

    async getPetById(id: string): Promise<Pet> {
        return await this.petRepository.findOne(id)       
    }

    async updatePetById(petUpdateDTO: PetUpdateDTO): Promise<Pet> {
        return await this.petRepository.update(petUpdateDTO);
    }

    async deletePetById(id: string): Promise<boolean> {
        return await this.petRepository.delete(id);
    }

}
