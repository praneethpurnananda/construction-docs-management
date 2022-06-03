/*
  # input-forms module contains all the components which take input from user
  # created date -> 08-04-2022
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module'

//angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

//components
import { CommonLoginComponent } from './common-login/common-login.component';
import { CommonRegistrationComponent } from './common-registration/common-registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonNewPasswordComponent } from './common-new-password/common-new-password.component';



@NgModule({
  declarations: [CommonLoginComponent, CommonRegistrationComponent, ForgotPasswordComponent, CommonNewPasswordComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class InputFormsModule { }
