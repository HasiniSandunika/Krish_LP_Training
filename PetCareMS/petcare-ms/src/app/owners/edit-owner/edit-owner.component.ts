import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'em-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent implements OnInit, OnDestroy {

  private _oEName: string = '';
  private _oEResidence: string = '';
  private _oEContact: string = '';
  private _oEGender: string = '';
  private subscriber!: Subscription;
  private ownerId: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, 
    private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.subscriber=this.activatedRouter.paramMap.subscribe(params => { 
      this.ownerId=  params.get('id')?.toString();
      this.getOwnerById();
   });
  }

  ngOnDestroy(){
    if(this.subscriber!=undefined){
      this.subscriber.unsubscribe();
    }    
  }

  getOwnerById(){
    this.subscriber=this.ownerService.getOwnerById(this.ownerId).subscribe({
      next: data=>{
        this._oEName=data.name;
        this._oEResidence=data.residence;
        this._oEContact=data.contact;
        this._oEGender=data.gender;
      },
      error: error => {
        alert(`${error.error.message}`);
      }
    });
  }

  editEditOwner(){
    if(this.oEValidate()){
      this.editRecord();
    }
    else{
      alert('Complete before navigate');
    }    
  }

  editRecord(){    
    const ownerUpdateDTO={
      name: this._oEName,
      residence: this._oEResidence,
      contact: this._oEContact,
      gender: this._oEGender
    }   
    this.subscriber=this.ownerService.updateOwnerById(this.ownerId, ownerUpdateDTO).subscribe({
      next: ()=>{
        alert(`Successfully updated the record`);
        this.router.navigate(['/owners']);
      },
      error: error => {
        alert(`${error.error.message}`);
      }
    });
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
