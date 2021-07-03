import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerImpl } from '../OwnerImpl';
import owners_json from '../data/owners.json';

@Component({
  selector: 'em-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent implements OnInit {

  private _oEName: string = '';
  private _oEResidence: string = '';
  private _oEContact: string = '';
  private _oEGender: string = '';
  private ownerImple!:OwnerImpl;
  private sub: any;
  private ownerId: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.activatedRouter.paramMap.subscribe(params => { 
     this.ownerImple=owners_json.find((val: { id: string; }) => val.id==params.get('id'));
     this.ownerId=  params.get('id')?.toString();
     this._oEName=this.ownerImple.name;
     this._oEResidence= this.ownerImple.residence;
     this._oEContact=this.ownerImple.contact;
     this._oEGender=this.ownerImple.gender;
    });
  }

  editEditOwner(){
    if(this.oEValidate()){
      this.editRecord();
      alert('Successfully edited the record');
      this.router.navigate(['/owners']);
    }
    else{
      alert('Complete before navigate');
    }    
  }

  editRecord(){    
    let ownerListArray: Array<OwnerImpl> = new Array();   
    ownerListArray=owners_json;
    //////////////////////////////////////////
    // let owner_json_string = JSON.stringify(ownerListArray);
    // console.log(owner_json_string);
    // var fs = require('fs');
    // fs.writeFile ("input.json", JSON.stringify(owner_json_string), function(err: any) {
    //   if (err) throw err;
    //   console.log('complete');
    //   }
    // );
    ///////////////////////////////////
    let elementIndex=0;
    ownerListArray.forEach((element,index)=>{
      if(element.id==this.ownerId) {
        elementIndex=index;
      };
   });
    ownerListArray[elementIndex]=new OwnerImpl(this.ownerId.toString(), 
    this._oEName, this.OEResidence, this.OEContact, this.OEGender);
  }

  oEValidate(){
    if(this._oEName.length>0 && this._oEResidence.length>0 && this._oEContact.length>0 && this._oEGender.length>0){
        return true;
       }
       else{
         return false;
       }
  }

  cancelEditOwner(){
    this.router.navigate(['/owners']);
  }

  set OEName(value: string) {
    this._oEName = value;
  }

  get OEName(): string {
    return this._oEName;
  }

  set OEResidence(value: string) {
    this._oEResidence = value;;
  }

  get OEResidence(): string {
    return this._oEResidence;
  }

  set OEContact(value: string) {
    this._oEContact = value;
  }

  get OEContact(): string {
    return this._oEContact;
  }

  set OEGender(value: string) {
    this._oEGender = value;
  }

  get OEGender(): string {
    return this._oEGender;
  }

}
