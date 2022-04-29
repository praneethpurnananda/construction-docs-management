import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


//components
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [  CreateUserComponent, ManageUserComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports:[ManageUserComponent]
})
export class SharedModuleModule { }
