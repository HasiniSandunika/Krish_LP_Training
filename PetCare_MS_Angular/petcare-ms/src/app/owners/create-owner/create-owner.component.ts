import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import owners_json from '../data/owners.json';
import { OwnerImpl } from '../OwnerImpl';

@Component({
  selector: 'em-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit {

  private _oCName: string = '';
  private _oCResidence: string = '';
  private _oCContact: string = '';
  private _oCGender: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createCreateOwner(){
    if(this.oCValidate()){
      this.createRecord();
      alert('Successfully created the record');
      this.router.navigate(['/owners']);
    }
    else{
      alert('Complete before navigate');
    }    
  }

  createRecord(){    
    let ownerListArray: Array<OwnerImpl> = new Array();   
    ownerListArray=owners_json;
    let max = 0;
    ownerListArray.forEach(element => {
      if (parseInt(element.id) > max) {
        max = parseInt(element.id);
      }
    });
    ownerListArray[ownerListArray.length]=new OwnerImpl((max+1).toString(), 
    this._oCName, this.OCResidence, this.OCContact, this.OCGender);
    // let owner_json_string = JSON.stringify(ownerListArray);
    // console.log(owner_json_string);
    // var fs = require('fs');
    // fs.writeFile ("input.json", JSON.stringify(owner_json_string), function(err: any) {
    //   if (err) throw err;
    //   console.log('complete');
    //   }
    // );
    
  }

  oCValidate(){
    if(this._oCName.length>0 && this._oCResidence.length>0 && this._oCContact.length>0 && this._oCGender.length>0){
        return true;
       }
       else{
         return false;
       }
  }

  cancelCreateOwner(){
    this.router.navigate(['/owners']);
  }

  set OCName(value: string) {
    this._oCName = value;
  }

  get OCName(): string {
    return this._oCName;
  }

  set OCResidence(value: string) {
    this._oCResidence = value;
  }

  get OCResidence(): string {
    return this._oCResidence;
  }

  set OCContact(value: string) {
    this._oCContact = value;
  }

  get OCContact(): string {
    return this._oCContact;
  }

  set OCGender(value: string) {
    this._oCGender = value;
  }

  get OCGender(): string {
    return this._oCGender;
  }

}
