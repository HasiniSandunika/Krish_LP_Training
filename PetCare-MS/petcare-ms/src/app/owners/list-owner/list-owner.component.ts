import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../Owners.model';
import { Subscription } from 'rxjs';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'em-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit, OnDestroy {

  title: string = 'PMS - Petcare Management System';
  owners!: Owner[];
  filteredOwners!: Owner[];
  private _nameFilter: string = '';
  private subscriber!: Subscription;

  constructor(private router: Router, private ownerService: OwnerService) { }

  ngOnInit(): void {    
    this.getAllOwners();
  }

  getAllOwners(){
    this.subscriber=this.ownerService.getAllOwners().subscribe({
      next: data=>{
        this.filteredOwners=data;
        this.owners=this.filteredOwners;
      },
      error: error => {
        alert(`${error.message}`);
      }
    });
  }

  set NameFilter(value: string) {
    this._nameFilter = value;
    this.filterByName();
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  get NameFilter(): string {
    return this._nameFilter;
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
      this.subscriber=this.ownerService.deleteOwnerById(value).subscribe(
        {
        next: ()=>{        
          alert(`Successfully deleted the record`);      
          window.location.reload();
        },
        error: error => {
          alert(`${error.message}`);
        }
      }
      );
  }

}
