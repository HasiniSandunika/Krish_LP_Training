import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'em-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit, OnDestroy {

  private _oCName: string = '';
  private _oCResidence: string = '';
  private _oCContact: string = '';
  private _oCGender: string = '';
  private subscriber!: Subscription;

  constructor(private router: Router, private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.subscriber!=undefined){
      this.subscriber.unsubscribe();
    }    
  }

  createCreateOwner(){
    if(this.oCValidate()){
      this.createRecord();
    }
    else{
      alert('Complete before navigate');
    }    
  }

  createRecord(){    
    const ownerPetDTO={
      name: this._oCName,
      residence: this._oCResidence,
      contact: this._oCContact,
      gender: this._oCGender
    }   
    this.subscriber=this.ownerService.createOwner(ownerPetDTO).subscribe({
      next: ()=>{
        alert(`Successfully created the record`);
        this.router.navigate(['/owners']);
      },
      error: error => {
        alert(`${error.error.message}`);
      }
    });
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
