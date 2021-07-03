import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetImpl } from '../PetImpl';
import pets_json from '../data/pets.json';

@Component({
  selector: 'em-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {

  private _eName: string = '';
  private _eType: string = '';
  private _eGender: string = '';
  private _eAge: string = '';
  private petImple!:PetImpl;
  private sub: any;
  private petId: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.activatedRouter.paramMap.subscribe(params => { 
      this.petImple=pets_json.find((val: { id: string; }) => val.id==params.get('id'));
      this.petId=  params.get('id')?.toString();
      this._eName=this.petImple.name;
      this._eType= this.petImple.type;
      this._eGender=this.petImple.gender;
      this._eAge=this.petImple.age;
     });
  }

  editEditPet(){
    if(this.eValidate()){
      this.editRecord();
      alert('Successfully edited the record');
      this.router.navigate(['/pets']);
    }
    else{
      alert('Edit before navigate');
    }  
  }

  editRecord(){    
    let petListArray: Array<PetImpl> = new Array();   
    petListArray=pets_json;
    let elementIndex=0;
    petListArray.forEach((element,index)=>{
      if(element.id==this.petId) {
        elementIndex=index;
      };
   });
    petListArray[elementIndex]=new PetImpl(this.petId.toString(), 
    this._eName, this._eType, this._eGender, this._eAge);
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
