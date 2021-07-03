import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { OwnerCreateDTO } from './dto/OwnerCreateDTO.dto';
import { OwnerUpdateDTO } from './dto/OwnerUpdateDTO.dto';
import { Owner } from './Owners.model';

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  constructor(private httpService: HttpService) { }

  getAllOwners(): Observable<Owner[]> {
    return this.httpService.getAllOwners()
  }

  deleteOwnerById(id: string){
    return this.httpService.deleteOwnerById(id);
  }

  createOwner(ownerCreateDTO: OwnerCreateDTO): Observable<OwnerCreateDTO>{
    return this.httpService.createOwner(ownerCreateDTO);
  }

  getOwnerById(id: string): Observable<Owner>{
    return this.httpService.getOwnerById(id);
  }

  updateOwnerById(id: string, ownerUpdateDTO: OwnerUpdateDTO): Observable<OwnerUpdateDTO>{
    return this.httpService.updateOwnerById(id, ownerUpdateDTO);
  }

}
