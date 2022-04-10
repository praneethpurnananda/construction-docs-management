/*
  # input-forms module contains all the components which take input from user
  # created date -> 08-04-2022
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

//components
import { CommonLoginComponent } from './common-login/common-login.component';
import { CommonRegistrationComponent } from './common-registration/common-registration.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommonLoginComponent, CommonRegistrationComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputFormsModule { }
