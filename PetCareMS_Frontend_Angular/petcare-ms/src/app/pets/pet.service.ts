import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Pet } from './Pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService) {
    
   }

   getPets(): Observable<Pet[]> {
    console.log(this.httpService.getAllPets());
    return this.httpService.getAllPets();
  }

}
