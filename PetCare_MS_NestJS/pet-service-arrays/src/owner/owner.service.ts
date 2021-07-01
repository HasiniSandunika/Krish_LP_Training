import { Injectable, NotFoundException } from '@nestjs/common';
import { Owner } from './Owner.model';
import { OwnerCreateDTO } from './OwnerCreate.dto';
import { v1 as uuid} from 'uuid';
import { OwnerUpdateDTO } from './OwnerUpdate.dto';
import { OwnerSearchDTO } from './OwnerSearch.dto';

@Injectable()
export class OwnerService {
    private owners: Owner[]=[];

    getAllOwners(){
        return this.owners;
    }

    createOwner(ownerCreateDTO: OwnerCreateDTO){
        const {name, residence, contact, gender}= ownerCreateDTO;
        const owner={
            id: uuid(),
            name: name,
            residence: residence,
            contact: contact,
            gender: gender
        }
        this.owners.push(owner);
        return owner;
    }

    ownerSearch(ownerSerarchDTO: OwnerSearchDTO){
        const {name}=ownerSerarchDTO;
        let owners=this.getAllOwners();
        if(name){
            owners=owners.filter(owner=>owner.name.includes(name));
        }
        return owners;
    }

    getOwnerByID(id: string): Owner{
        const owners=this.getAllOwners();
        let owner= owners.find(owner=>owner.id==id);
        if(!owner){
            throw new NotFoundException("Cannot find this owner");
        }
        return owner;
    }

    updateOwnerByID(ownerUpdateDTO: OwnerUpdateDTO){
        const {id, name, residence, contact, gender}=ownerUpdateDTO;
        let owner=this.getOwnerByID(id);
        owner.name=name;
        owner.residence=residence;
        owner.contact=contact;
        owner.gender=gender;
        return owner;
    }

    deleteOwnerByID(id: string): boolean{
        let owners=this.getAllOwners();
        this.owners=owners.filter(owner=>owner.id!=id);
        return (owners.length!=this.owners.length);
    }
}
