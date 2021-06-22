import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../Owners.model';
import owners_json from '../data/owners.json';
import { OwnerImpl } from '../OwnerImpl';

@Component({
  selector: 'em-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {

  title: string = 'PMS - Petcare Management System';
  owners: Owner[]=owners_json;
  filteredOwners: Owner[]=owners_json;
  private _nameFilter: string = '';

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
    this.filteredOwners= this.owners.filter(owner=>owner.name.toUpperCase().includes(this.NameFilter.toUpperCase()));
  }

  editRowOwner(value:string){
    this.router.navigate(['/edit_owner/'+value]);
  }

  createOwner(){
    this.router.navigate(['/create_owner']);
  }

  deleteRowOwner(value:string){
    let ownerListArray: Array<OwnerImpl> = new Array();   
    ownerListArray=owners_json;
    ownerListArray.forEach((element,index)=>{
      if(element.id==value) ownerListArray.splice(index,1);
   });
  }

}
