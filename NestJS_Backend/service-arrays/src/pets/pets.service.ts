import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './Pet.model';
import { v1 as uuid} from 'uuid';
import { PetSearchDTO } from './PetSearch.dto';
import { PetUpdateDTO } from './PetUpdate.dto';
import { PetCreateDTO } from './PetCreate.dto';

@Injectable()
export class PetsService {

    private pets: Pet[]=[];

    getAllPets(){
        return this.pets;
    }

    createPet(petCreateDTO: PetCreateDTO){
        const {name, type, gender, age}= petCreateDTO;
        const pet={
            id: uuid(),
            name: name,
            type: type,
            gender: gender,
            age: age
        }
        this.pets.push(pet);
        return pet;
    }

    petSearch(petSerarchDTO: PetSearchDTO){
        const {name}=petSerarchDTO;
        let pets=this.getAllPets();
        if(name){
            pets=pets.filter(pet=>pet.name.includes(name));
        }
        return pets;
    }

    getPetByID(id: string): Pet{
        const pets=this.getAllPets();
        let pet= pets.find(pet=>pet.id==id);
        if(!pet){
            throw new NotFoundException("Cannot find the pet");
        }
        return pet;
    }

    updatePetByID(petUpdateDTO: PetUpdateDTO){
        const {id, name, type, gender, age}=petUpdateDTO;
        let pet=this.getPetByID(id);
        pet.name=name;
        pet.gender=gender;
        pet.age=age;
        pet.type=type;
        return pet;
    }

    deletePetByID(id: string): boolean{
        let pets=this.getAllPets();
        this.pets=pets.filter(pet=>pet.id!=id);
        return (pets.length!=this.pets.length);
    }

}
