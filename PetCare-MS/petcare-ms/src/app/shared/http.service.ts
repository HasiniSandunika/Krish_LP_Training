import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OwnerCreateDTO } from "../owners/dto/OwnerCreateDTO.dto";
import { OwnerUpdateDTO } from "../owners/dto/OwnerUpdateDTO.dto";
import { Owner } from "../owners/Owners.model";
import { PetCreateDTO } from "../pets/dto/PetCreateDTO.dto";
import { PetUpdateDTO } from "../pets/dto/PetUpdateDTO.dto";
import { Pet } from "../pets/Pets.model";

@Injectable({providedIn: 'root'})
export class HttpService{

    private petUrl: string = 'http://localhost:3000/pets';
    private ownerUrl: string = 'http://localhost:3000/owner';


    constructor(private http: HttpClient){ }

    getAllPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.petUrl);
    }

    getPetById(id: string): Observable<Pet>{
        return this.http.get<Pet>(this.petUrl+'/'+id);
    }

    deletePetById(id: string) {
        return this.http.delete(this.petUrl+'/'+id);
    }

    createPet(petCreateDTO: PetCreateDTO): Observable<PetCreateDTO>{
        return this.http.post<PetCreateDTO>(this.petUrl, petCreateDTO);
    }

    updatePetById(id: string, petUpdateDTO: PetUpdateDTO): Observable<PetUpdateDTO>{
        return this.http.put<PetUpdateDTO>(this.petUrl+'/edit/'+id, petUpdateDTO);
    }

    getAllOwners(): Observable<Owner[]> {
        return this.http.get<Owner[]>(this.ownerUrl);
    }

    getOwnerById(id: string): Observable<Owner>{
        return this.http.get<Owner>(this.ownerUrl+'/'+id);
    }

    deleteOwnerById(id: string) {
        return this.http.delete(this.ownerUrl+'/'+id);
    }

    createOwner(ownerCreateDTO: OwnerCreateDTO): Observable<OwnerCreateDTO>{
        return this.http.post<OwnerCreateDTO>(this.ownerUrl, ownerCreateDTO);
    }

    updateOwnerById(id: string, ownerUpdateDTO: OwnerUpdateDTO): Observable<OwnerUpdateDTO>{
        return this.http.put<OwnerUpdateDTO>(this.ownerUrl+'/edit/'+id, ownerUpdateDTO);
    }

}