import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/Pets.model';

@Component({
  selector: 'em-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})

export class ListPetComponent implements OnInit, OnDestroy {

  title: string = 'PMS - Petcare Management System';
  pets!: Pet[];
  filteredPets!: Pet[];
  private _nameFilter: string = '';
  private subscriber!: Subscription;

  constructor(private router: Router, private petService: PetService) { }

  ngOnInit(): void {   
    this.getAllPets();
  }
  
  set NameFilter(value: string) {
    this._nameFilter = value;
    this.filterByName();
  }

  get NameFilter(): string {
    return this._nameFilter;
  }

  getAllPets(){
    this.subscriber=this.petService.getAllPets().subscribe({
      next: data=>{
        this.filteredPets=data;
        this.pets=this.filteredPets;
      },
      error: error => {
        alert(`${error.error.message}`);
      }
    });
  }

  ngOnDestroy(){
    if(this.subscriber!=undefined){
      this.subscriber.unsubscribe();
    }    
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
    this.subscriber=this.petService.deletePetById(value).subscribe(
      {
      next: ()=>{        
        alert(`Successfully deleted the record`);      
        window.location.reload();
      },
      error: error => {
        alert(`${error.error.message}`);
      }
    }
    );
  }

}
