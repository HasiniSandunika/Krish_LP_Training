import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'em-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit, OnDestroy {

  private _eName: string = '';
  private _eType: string = '';
  private _eGender: string = '';
  private _eAge: string = '';
  private subscriber!: Subscription;
  private petId: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, 
    private petService: PetService) { }

  ngOnInit(): void {
    this.subscriber=this.activatedRouter.paramMap.subscribe(params => { 
        this.petId=  params.get('id')?.toString();
        this.getPetById();
     });
  }

  ngOnDestroy(){
    if(this.subscriber!=undefined){
      this.subscriber.unsubscribe();
    }    
  }

  getPetById(){
    this.subscriber=this.petService.getPetById(this.petId).subscribe({
      next: data=>{
        this._eName=data.name;
        this._eType=data.type;
        this._eGender=data.gender;
        this._eAge=data.age;
      },
      error: error => {
        alert(`${error.error.message}`);
      }
    });
  }

  editEditPet(){
    if(this.eValidate()){
      this.editRecord();
    }
    else{
      alert('Edit before navigate');
    }  
  }

  editRecord(){    
      const petUpdateDTO={
        name: this._eName,
        type: this._eType,
        gender: this._eGender,
        age: this._eAge
      }   
      this.subscriber=this.petService.updatePetById(this.petId, petUpdateDTO).subscribe({
        next: ()=>{
          alert(`Successfully updated the record`);
          this.router.navigate(['/pets']);
        },
        error: error => {
          alert(`${error.error.message}`);
        }
      });
  }

  eValidate(){
    if(this._eName.length>0 && this._eType.length>0 && this._eGender.length>0 && this._eAge.length>0){
        return true;
       }
       else{
         return false;
       }
  }

  cancelEditPet(){
    this.router.navigate(['/pets']);
  }

  set EName(value: string) {
    this._eName = value;
  }

  get EName(): string {
    return this._eName;
  }

  set EType(value: string) {
    this._eType = value;
  }

  get EType(): string {
    return this._eType;
  }

  set EGender(value: string) {
    this._eGender = value;
  }

  get EGender(): string {
    return this._eGender;
  }

  set EAge(value: string) {
    this._eAge = value;
  }

  get EAge(): string {
    return this._eAge;
  }

}
