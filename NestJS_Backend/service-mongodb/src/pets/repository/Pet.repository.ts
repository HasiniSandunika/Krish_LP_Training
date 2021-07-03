import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDTO } from "../dto/PetCreate.dto";
import { PetSearchDTO } from "../dto/PetSearch.dto";
import { PetUpdateDTO } from "../dto/PetUpdate.dto";
import { Pet, PetDocumet } from "../schemas/Pet.schema";
import * as mongoose from 'mongoose';

@Injectable()
export class PetRepository{
    
    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocumet>) { }

    async create(petCreateDTO: PetCreateDTO): Promise<Pet> {
        let pet = new this.petModel(petCreateDTO);
        return await pet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find();
    }

    async findOne(id: string): Promise<Pet> {
        return await this.petModel.findOne({ _id: id })
    }

    async petSearch(petSearchDTO: PetSearchDTO) {
        let name = Object.is(petSearchDTO.name, undefined) ? '' : petSearchDTO.name;
        return await this.petModel.find({ $and: [{ name: { $regex: name } }] })
    }

    async update(petUpdateDTO: PetUpdateDTO): Promise<Pet> {
        return await this.petModel.findOneAndUpdate({ _id: petUpdateDTO.id}, 
            {  name: petUpdateDTO.name, type: petUpdateDTO.type, 
                gender: petUpdateDTO.gender, age: petUpdateDTO.age}, {new: true});         
    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)
        let result = await this.petModel.deleteOne({ _id: objId })
        console.log(result.n)
        return (result.n === 1)
    }
}