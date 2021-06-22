import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LkformatterPipe } from './shared/lkformatter.pipe';
import { HomeComponent } from './home/home.component';
import{FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { CreatePetComponent } from './pets/create-pet/create-pet.component';
import { EditPetComponent } from './pets/edit-pet/edit-pet.component';
import { ListPetComponent } from './pets/list-pet/list-pet.component';
import { CreateOwnerComponent } from './owners/create-owner/create-owner.component';
import { EditOwnerComponent } from './owners/edit-owner/edit-owner.component';
import { ListOwnerComponent } from './owners/list-owner/list-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    LkformatterPipe,
    HomeComponent,
    ProgressBarComponent,
    CreatePetComponent,
    EditPetComponent,
    ListPetComponent,
    CreateOwnerComponent,
    EditOwnerComponent,
    ListOwnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pets', component: ListPetComponent },
      { path: 'create_pet', component: CreatePetComponent },
      { path: 'edit_pet/:id', component: EditPetComponent },
      { path: 'owners', component: ListOwnerComponent },
      { path: 'create_owner', component: CreateOwnerComponent },
      { path: 'edit_owner/:id', component: EditOwnerComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
