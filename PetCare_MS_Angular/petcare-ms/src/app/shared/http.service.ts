import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pet } from "../pets/Pets.model";

@Injectable({providedIn: 'root'})
export class HttpService{

    private petUrl: string = 'http://localhost:3000/pets';

    constructor(private http: HttpClient){

    }
    getAllPets(): Observable<Pet[]> {

        return this.http.get<Pet[]>(this.petUrl);

    }
}