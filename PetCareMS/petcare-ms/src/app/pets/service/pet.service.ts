import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/http.service';
import { PetCreateDTO } from '../dto/PetCreateDTO.dto';
import { PetUpdateDTO } from '../dto/PetUpdateDTO.dto';
import { Pet } from '../model/Pets.model';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  constructor(private httpService: HttpService) { }

  getAllPets(): Observable<Pet[]> {
    return this.httpService.getAllPets()
  }

  deletePetById(id: string){
    return this.httpService.deletePetById(id);
  }

  createPet(petCreateDTO: PetCreateDTO): Observable<PetCreateDTO>{
    return this.httpService.createPet(petCreateDTO);
  }

  getPetById(id: string): Observable<Pet>{
    return this.httpService.getPetById(id);
  }

  updatePetById(id: string, petUpdateDTO: PetUpdateDTO): Observable<PetUpdateDTO>{
    return this.httpService.updatePetById(id, petUpdateDTO);
  }

}
