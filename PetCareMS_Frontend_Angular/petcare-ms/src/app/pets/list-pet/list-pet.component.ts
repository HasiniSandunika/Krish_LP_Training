import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import pets_json from '../data/pets.json';
import { PetImpl } from '../PetImpl';
import { Pet } from '../Pets.model';

@Component({
  selector: 'em-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit {

  title: string = 'PMS - Petcare Management System';
  pets: Pet[]=pets_json;
  filteredPets: Pet[]=pets_json;
  message: string = '';
  private _nameFilter: string = '';
  subscriber!: Subscription;

  set NameFilter(value: string) {
    this._nameFilter = value;
    this.filterByName();
  }

  get NameFilter(): string {
    return this._nameFilter;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {   
  }

  filterByName(){
    this.filteredPets= this.pets.filter(pet=>pet.name.toUpperCase().includes(this.NameFilter.toUpperCase()));
  }

  editRowPet(value: string){
    this.router.navigate(['/edit_pet/'+value]);
  }

  createPet(){
    this.router.navigate(['/create_pet']);
  }

  deleteRowPet(value: string){
    let petListArray: Array<PetImpl> = new Array();   
    petListArray=pets_json;
    petListArray.forEach((element,index)=>{
      if(element.id==value) petListArray.splice(index,1);
   });
  }

}
