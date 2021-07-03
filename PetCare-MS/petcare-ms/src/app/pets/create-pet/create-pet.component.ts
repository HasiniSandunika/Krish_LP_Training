import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'em-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit, OnDestroy {

  private _cName: string = '';
  private _cType: string = '';
  private _cGender: string = '';
  private _cAge: string = '';
  private subscriber!: Subscription;

  constructor(private router: Router, private petService: PetService) { }

  ngOnInit(): void {
  }

  createCreatePet(){
    if(this.cValidate()){
      this.createRecord();     
    }
    else{
      alert('Complete before navigate');
    }    
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  createRecord(){ 
    const createPetDTO={
      name: this._cName,
      type: this._cType,
      gender: this._cGender,
      age: this._cAge
    }   
    this.subscriber=this.petService.createPet(createPetDTO).subscribe({
      next: ()=>{
        alert(`Successfully created the record`);
        this.router.navigate(['/pets']);
      },
      error: error => {
        alert(`${error.message}`);
      }
    });
  }

  cValidate(){
    if(this._cName.length>0 && this._cType.length>0 && this._cGender.length>0 && this._cAge.length>0){ 
      return true;
    }
    else{
         return false;
    }
  }

  cancelCreatePet(){
    this.router.navigate(['/pets']);
  }

  set CName(value: string) {
    this._cName = value;
  }

  get CName(): string {
    return this._cName;
  }

  set CType(value: string) {
    this._cType = value;
  }

  get CType(): string {
    return this._cType;
  }

  set CGender(value: string) {
    this._cGender = value;
  }

  get CGender(): string {
    return this._cGender;
  }

  set CAge(value: string) {
    this._cAge = value;
  }

  get CAge(): string {
    return this._cAge;
  }

}
