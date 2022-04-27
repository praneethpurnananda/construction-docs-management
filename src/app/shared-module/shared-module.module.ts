import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MatTableModule } from '@angular/material/table'; 


//components
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [CreateUserComponent, ManageUserComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule
  ],
  exports:[ManageUserComponent]
})
export class SharedModuleModule { }
