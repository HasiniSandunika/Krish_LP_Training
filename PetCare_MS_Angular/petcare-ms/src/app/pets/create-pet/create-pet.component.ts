import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetImpl } from '../PetImpl';
import pets_json from '../data/pets.json';

@Component({
  selector: 'em-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  private _cName: string = '';
  private _cType: string = '';
  private _cGender: string = '';
  private _cAge: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createCreatePet(){
    if(this.cValidate()){
      this.createRecord();
      alert('Successfully created the record');
      this.router.navigate(['/pets']);
    }
    else{
      alert('Complete before navigate');
    }    
  }

  createRecord(){    
    let petListArray: Array<PetImpl> = new Array();   
    petListArray=pets_json;
    let max = 0;
    petListArray.forEach(element => {
      if (parseInt(element.id) > max) {
        max = parseInt(element.id);
      }
    });
    petListArray[petListArray.length]=new PetImpl((max+1).toString(), 
    this._cName, this._cType, this._cGender, this._cAge);
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
