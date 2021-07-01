import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OwnerCreateDTO } from "../dto/OwnerCreate.dto";
import { OwnerSearchDTO } from "../dto/OwnerSearch.dto";
import { OwnerUpdateDTO } from "../dto/OwnerUpdate.dto";
import { Owner, OwnerDocumet } from "../schemas/Owner.schema";
import * as mongoose from 'mongoose';

@Injectable()
export class OwnerRepository{
    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocumet>) { }

    async create(ownerCreateDTO: OwnerCreateDTO): Promise<Owner> {
        let owner = new this.ownerModel(ownerCreateDTO);
        return await owner.save();
    }

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find();
    }

    async findOne(id: string): Promise<Owner> {
        return await this.ownerModel.findOne({ _id: id })
    }

    async ownerSearch(ownerSearchDTO: OwnerSearchDTO) {
        let name = Object.is(ownerSearchDTO.name, undefined) ? '' : ownerSearchDTO.name;
        return await this.ownerModel.find({ $and: [{ name: { $regex: name } }] })
    }

    async update(ownerUpdateDTO: OwnerUpdateDTO): Promise<Owner> {
        return await this.ownerModel.findOneAndUpdate({ _id: ownerUpdateDTO.id}, 
            {  name: ownerUpdateDTO.name, residence: ownerUpdateDTO.residence, 
                contact: ownerUpdateDTO.contact, gender: ownerUpdateDTO.gender}, {new: true});         
    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)
        let result = await this.ownerModel.deleteOne({ _id: objId })
        console.log(result.n)
        return (result.n === 1)
    }
}